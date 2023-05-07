import React,{useState,useEffect} from "react";
import './index.scss'
import { useSelector,useDispatch } from "react-redux";

//添加功能视图
function Title(props){
    let [message,setMessage] = useState('')
    const{addTodo} = props

    const getMessage = (e)=>{
        setMessage(message => e.target.value)
    }
    const add = ()=>{
        let arr = {
            name:message,
            id:Date.now(),
            ischeck: false
        }
        setMessage('')
        addTodo(arr)
    }
    return(
        <div>
            <h3>todoList</h3>
            <input 
                type="text"  
                value={message}
                onChange={e => getMessage(e)}
                placeholder="请输入你的任务名称"
                className="input"
            />
            <button onClick={()=>{add()}} className="btnChoose">确认</button>
        </div>
    )
}

//列表视图
function List(props){
    let {list,deleteItem,itemCheckFun} = props
    const itemCheck = (item) =>{
        itemCheckFun(item.ischeck,item.id,item)
    }
    const deleteFun = (id)=>{
        deleteItem(id)
    }
    return(
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

function Users(){
    let {list} = useSelector(state=>state.list)
    let {opt} = useSelector(state=>state.options)
    let [All,setAll] = useState(false)
    const dispatch = useDispatch()

    //通过判断当前的opt来决定是否过滤list数组
    switch(opt){ 
        case 'completed':
            list = list.filter(item => item.ischeck === true)
            break;
        default:
    }

    useEffect(()=>{
        if(opt === 'clear'){
            dispatch({type:"FILTER_THREE",payload:'clear'})
        }
    }, [opt,dispatch])

    //添加功能
    const confirmAdd = (arr)=>{
        dispatch({type:"LIST_PUSH",payload:arr})
        setAll(false) 
    }

    //单选
    const itemCheck = (data,id,item) =>{
        const checkLength = list.filter(item=>item.ischeck).length;
        if(checkLength === list.length-1){
            setAll(true) 
        }else{
            setAll(false) 
        }
        dispatch({type:"ITEM_CHECK",payload:{data,id}})
    }

   //删除功能
    const FunDelete = (id)=>{
        dispatch({type:"LIST_DELETE",payload:id})
        const checkLength = list.filter(item=>item.ischeck).length;
        list.forEach(item => {
            if(item.ischeck === true){
                if(checkLength === list.length){
                    setAll(true) 
                }else{
                    setAll(false) 
                }
            }else{
                if(checkLength+1 === list.length){
                    setAll(true) 
                }else{
                    setAll(false) 
                }
            }
        });
    }

    // 全选
    const changeAllFun = (checked)=>{
        setAll(checked)   
        dispatch({type:"ALL_CHECK",payload:checked})
    }

    // 过滤
    const filterFun = (type)=>{
        dispatch({type:'SET_FILTER',payload: type})
    }
    
    return(
        <div className="box">
            <div>
                <Title addTodo={confirmAdd}></Title>
                <List list={list} deleteItem={FunDelete} itemCheckFun={itemCheck}></List>
                <Bottom list={list} all={All}  changeAll={changeAllFun}></Bottom>
                <Btn filterData={filterFun}></Btn>
            </div>
        </div>
    )
}

export default Users