import React, { useState } from 'react'

function Demo5(){
    let [num,setNum] = useState(1)
    let [onOff, setOnOff] = useState(true)

    const sub = ()=>{
        console.log('开始')
        setNum(num - 1)  
        console.log('结束')
    }


    // 渲染函数
    const renderDiv = ()=>{
        let result = null
        if(num === 1){
            result = <h1>{num}</h1>  
        }else if(num === 2){
            result = <h2>{num}</h2>  
        }else if(num === 3){
            result = <h3>{num}</h3>  
        }else if(num === 4){
            result = <h4>{num}</h4>  
        }
        return result
    }


    return (
        <div>
            <h1>函数组件：state状态</h1>
            <p>{num}</p>
            <button onClick={()=>{
               setNum(num + 1) 
            }}>+1</button>
            <button onClick={()=>{
               sub() 
            }}>-1</button>

            <hr />
            {
                onOff &&  <p >显示div</p>
            }
            {
                onOff ?<p >显示div1</p>: <p >显示div2</p>
            }
            {
                renderDiv()
            }

            <button onClick={()=>{
               setOnOff(!onOff) 
            }}>显示/隐藏</button>
            <div style={{display: onOff ? 'block': 'none'}}>显示/隐藏</div>

        </div>
    )
}


export default Demo5