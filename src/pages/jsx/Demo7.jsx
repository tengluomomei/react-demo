import React from 'react'

class Demo7 extends React.Component{
    constructor(props){
        super()
        this.state = {
            num: 1,
            count: 2
        }
        this.addFun = this.addFun.bind(this)
        // setInterval(function(){
        //     console.log(111)
        // }, 1000)
    }

    componentDidMount(){
        console.log('componentDidMount...')
    }

    componentDidUpdate(props, state){
        console.log('componentDidUpdate...')  
        if(state.num === this.state.num){
            this.setState((state)=>{
                return {
                    num: state.num + 1   
                }
            })   
        }
    }

    // shouldComponentUpdate(props, state){
    //     return false
    // }
    

    addFun(){
    //    this.setState({
    //         // num: 10
    //    })
        console.log('+1_num')
        this.setState((state,props)=>{
            return {
                num: state.num + 1   
            }
        })
    }

    // 简介修改也是不允许
    renderFun(){
        this.setState((state)=>{
            return {
                num: state.num + 1   
            }
        })
        return <h1>xxxxxx</h1>
    }

    render(){
        let {num, count} = this.state
        console.log('render...')
        // 不能修改状态
        // this.setState((state)=>{
        //     return {
        //         num: state.num + 1   
        //     }
        // })
        return (
            <div>
                <h1>生命周期</h1>
                <p>{num}</p>
                <button onClick={()=>{this.addFun()}}>+ 1</button>
                <p>{count}</p>
                {/* <button>{this.renderFun()}</button> */}
            </div>
        )
    }
}

export default Demo7