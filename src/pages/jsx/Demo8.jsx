import React,{useState, useEffect} from "react";
import './Demo8.scss'

//顶部视图
function Title(props){
    let [message,setMessage] = useState('')
    const {addtodo} = props

    //输入框V-model
    const getMessage = (e)=>{
        setMessage(message => e.target.value)
    }

    //输入框添加按钮
    const confirmAdd = ()=>{
        addtodo(message)
        setMessage(message => '')
    }

    return(
        <div>
            <h3>{props.name}</h3>
            <input 
                type="text"
                value={message}
                onChange={e => getMessage(e)}
                placeholder="请输入你的任务名称"
                className="input"
            />
            <button onClick={()=>{confirmAdd()}} className="btnChoose">确认</button>
        </div>
    )
}

//列表视图
function List(props){
    let {list, changeCheckbox, deleteItem} = props

    // 列表每一项按钮功能
    const itemCheck = (item) =>{
        item.ischeck = !item.ischeck
        changeCheckbox(item)
    }

    const deleteFun = (id) =>{
        deleteItem(id)
    }

    return (
        <div>
            <ul className="list">
                {
                    list.map(item =>{
                        return <li key={item.id}>
                            <input type="checkbox" checked={item.ischeck} onChange={()=>{itemCheck(item)}} />
                            <p>{item.name}</p>  
                            <button onClick={()=>{
                                deleteFun(item.id)
                            }}>删除</button>
                        </li>
                    })
                }
            </ul>
        </div>
    ) 
}

//底部视图
function Bottom(props){
    let {list, all, changeAll} = props

    // 已完成
    const doneTotal = list.reduce((pre, item) => pre + (item.ischeck ? 1 : 0), 0)
    // 总数
    const totol = list.length

    //全选按钮功能
    const AllCheck = (e) =>{
        console.log(e.target.checked)
        changeAll(e.target.checked)
    }
    return(
        <div className="num">
            <input type="checkbox" checked={all} className="ALLcheck" onChange={(e)=>{AllCheck(e)}}/>
            <span >已完成{doneTotal}/全部{totol}</span>
        </div>
    )
}

//按钮视图
function Btn(props){
    let {filterData} = props

    const show = (type)=>{
        filterData(type)
    }

    return(
        <div className="btn">
            <button onClick={()=>{show('completed')}}>显示已完成任务</button>
            <button onClick={()=>{show('all')}}>显示全部</button>
            <button onClick={()=>{show('clear')}}>清除已完成任务</button>
        </div> 
    )
}

function TodoList(){
    let [todoList, setTodoList] = useState([])
    let [All,setAll] = useState(false)
    let [list,setList] = useState([
        {
            name:'吃饭',
            id:Date.now()-1,
            ischeck:false
        }
        ,
        {
            name:'睡觉',
            id:Date.now()-2,
            ischeck:false
            
        },
        {
            name:'打豆豆',
            id:Date.now()-3,
            ischeck:false
        },
        {
            name:'敲代码',
            id:Date.now()-4,
            ischeck:false
        },
    ])

    // 添加
    const addFun = (str)=>{
        let obj = {
            id: Date.now(),
            name: str,
            ischeck: false
        }
        setList(list => [...list, obj])
    }

    // list单选
    const changeCheckboxFun = (item)=>{
        let tempArry = [...list]
        tempArry.forEach(items => {
            if(items.id === item.id){
                items = item
            }
        })
        setList(list => tempArry)

        //查看选中长度是否等于list的长度
        const checkLength = list.filter(item=>item.ischeck).length;
        if(checkLength === list.length){
            setAll(All => true) 
        }else{
            setAll(All => false) 
        }
    }

    // list删除
    const deleteItemFun = (id)=>{
        setList(list => list.filter(item => item.id !== id))
    }

    // 全选
    const changeAllFun = (checked)=>{
        if(checked === true){
            let tempArry = [...list]
            tempArry.forEach(items => {
                items.ischeck = true
            })
            setList(list => tempArry) 
        }else{
            let tempArry = [...list]
            tempArry.forEach(items => {
                items.ischeck = false
            })
            setList(list => tempArry)  
        }
        setAll(All => checked)   
    }

    // 过滤
    const filterFun = (type)=>{
        if(type === 'completed'){
            let tempArry = list.filter(item => item.ischeck === true)
            setTodoList(todoList => tempArry) 
        }else if(type === 'all'){
            let tempArry = [...list]
            setTodoList(todoList  => tempArry) 
        }else if(type === 'clear'){
            let tempArry = list.filter(item => {
                return !item.ischeck
            })
            setList(list => tempArry)
            setTodoList(todoList => tempArry)
        } 
    }

    //监听list状态改变
    useEffect(() => {
        console.log('list发生改变')
        let temp = [...list]
        setTodoList(todoList => temp)
    }, [list])

    return(
        <div className="box">
            <div>
                <Title name='任务列表' addtodo={addFun}></Title>
                <List list={todoList} changeCheckbox={changeCheckboxFun} deleteItem={deleteItemFun}></List>
                <Bottom list={todoList} all={All} changeAll={changeAllFun}></Bottom>
            </div>

            <Btn filterData={filterFun}></Btn>
        </div>
    )
}

export default TodoList