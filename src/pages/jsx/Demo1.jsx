// import { Component} from "react";
import './Demo1.css'
import React,{useState, useEffect, useRef} from 'react'

// 类组件
class DemoA extends React.Component{
    myRef = React.createRef()
    constructor(props) {
        super()
        console.log('constructor')
        // 定义状态
        this.state = {
            num: 1
        }  
	}
    componentDidMount(){
        console.log('componentDidMount')
        console.log(this.myRef.current)
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')  
    }

    addFun(){
        // 修改状态
        this.setState({
            num: this.state.num + 1
        })
        
    }

    render(){
        let { num } = this.state
        return (
            <div>
                <p ref={this.myRef}>类组件</p>
                <p>{num}</p>
                <button onClick={()=>{this.addFun()}}>+1</button>
            </div>
        )
    }
}

// 函数组件
function DemoB(){
    let [count, setCount] = useState(100)
    let [abc, changeAbc] = useState(1)
    let box = useRef(null)

    useEffect(()=>{
        console.log('页面渲染完成')
        console.log(box.current)
        box.current.style.color = 'red'
    },[count])

    const addCount = () =>{
        setCount(count + 1)    
    }
    return (
        <div>
            <div className='demo'>
                <p ref={box}>函数组件</p>
                <p>{count}</p>
                <button onClick={()=>{addCount()}}>count + 1</button>
                <p>{abc}</p>
                <button onClick={()=>{changeAbc(abc + 10)}}>abc + 1</button>
            </div>
        </div>
    )
}


export {
    DemoA,
    DemoB
} 