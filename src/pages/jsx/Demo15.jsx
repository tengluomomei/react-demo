import React, {useState,useEffect, useLayoutEffect,useMemo, useCallback} from 'react'

function Demo15(){
    const [num, setNum] = useState(0)
    const [counter, setCounter] = useState(100)

    const changeFun = (e)=>{
        setNum(num +1)
    }

    const handleFun = useCallback(()=>{
        console.log('我是handleFun')
    },[])

    useEffect(()=>{
        // 定义副作用
        console.log('定义副作用')
        return ()=>{
            // 用来清除副作用
            console.log('用来清除副作用')  
        }
    },[num])

    useLayoutEffect(()=>{
        console.log('useLayoutEffect 定义副作用')
        return ()=>{
            console.log('useLayoutEffect 用来清除副作用')  
        }
    },[num])

    // 在函数式组件中，不要把副作用直接暴露在函数体内
    // setInterval(function(){
    //     setNum(num +1)
    // }, 1000)

    // useEffect(()=>{
    //     let t = setInterval(function(){
    //         setNum(num +1)
    //     }, 1000) 
    //     return ()=>{
    //         clearInterval(t)
    //     }
    // },[num, counter])

    const total = useMemo(()=>{
        return counter * 100 + 20 - 3
    },[counter])

   
    return (
        <div>
            <h2>useEffect / useLayoutEffect </h2>
            <div>
                {num}
                <button onClick={() => changeFun()}> + 1</button>
            </div>
            <div>
                {counter}
                <p>总数：{total}</p>
                <button onClick={() => {setCounter(counter + 1)}}> + 1</button>
                
            </div>

            <div>
                <button onClick={() => {handleFun()}}>点击</button>
            </div>
        </div> 
    )     
}

export default Demo15