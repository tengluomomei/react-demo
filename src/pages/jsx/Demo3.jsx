import React, {useState} from 'react'


const MySelf = {
    Box(){
        return <div>这是一个box</div>
    },
    Button(){
        return <button>这是一个button</button>
    }
}

function ChildEle(props){
    console.log(props)
    let {name, age, address, ...otherParams} = props
    return (
        <div>
            <span>{name} -{age}-{address}-{otherParams.header}</span>
            <span>{props.children}</span>
            {/* 如果children是函数类型，必须执行 */}
            {/* <p>{props.children()}</p> */}
        </div>
    )
}

// 函数组件
function Demo3(){
    const ele = '<div><a href="#">跳转吧</a></div>'
    const [items, setItems] = useState(['前端西瓜哥', '小明', '张三']);

    // jsx 给组件提供试图模板的
    const fn1 = (user)=>{
        return `${user.name}_${user.age}`
    }

    const fn2 = (data)=>{
        if(data){
            return <div>{data}</div>
        }else{
            return <div>我是默认值</div>
        }
    }

    let a = 'blue'
    let b = 'red'
    // let {Box,Button} = MySelf
    

    let user = {
        name: 'xiaoming',
        age: 18,
        address: 'beijing',
        list: ['a','b','c'],
        info: {id: 1,hobby: 'sing'},
        fn: ()=>{console.log('fn')},
        id: Symbol(1),
        header: (<div>我是头部</div>)
    }

    // 组件返回了jsx元素
    return (
        <>
            <h1 className='blue'>hello</h1>
            <h1 className={'blue'}>hello</h1>
            <h1 className={`${a} ${b}`}>hello</h1>
            <h1 className={`${a} w-20`}>hello</h1>

            <p>{fn1({name: 'xiaoming', age: 12})}</p>
            <div>{fn2('hello')}</div>
            <div>{fn2()}</div>
            <p>
                <label htmlFor="abc">abc <input id="abc" type={'checkbox'}/></label>
            </p>

            <div dangerouslySetInnerHTML={{__html: ele}}></div>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <p onClick={()=>{setItems()}}></p>
            <p style={{color: 'red', fontSize: '18px'}}>定义文本样式</p>
            <MySelf.Box/>
            <MySelf.Button/>
            <ChildEle name={user.name} age={user.age} address={user.address}></ChildEle>
            <ChildEle {...user}></ChildEle>
            <ChildEle>
                <span>我是子内容</span>
            </ChildEle>

            {/* <ChildEle>
                {()=>{return 100}}
            </ChildEle> */}
            <p>{['a',undefined,'c', ['xyz']]}</p>
        </> 
    )
}

// view是一个对象，这个对象叫做jsx元素
// let view = React.createElement(
//     'div',
//     {},
//     [
//         React.createElement('h1',{ key: 1}, ['hello'])  
//     ]
// )
// console.log(view)

// function Demo3(){
//     return view
// }


export default Demo3