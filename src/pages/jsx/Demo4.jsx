import React from 'react'

class Demo4 extends React.Component{
    constructor(props){
        super()
        this.state = {
            num: 1000
        }
        this.addFun = this.addFun.bind(this)
    }
    addFun(){
        // console.log(this)
        // this.setState({
        //     num: this.state.num + 1
        // })  
        // this.setState({
        //     num: 100
        // },function(){
        //     console.log('修改完成', this.state.num)
        // }) 
        // this.setState((state)=>{
        //     return {
        //         num: state.num + 1
        //     }
        // })
        // this.setState(state =>({num: state.num + 1}))
        // _老状态
        
        // console.log('修改前')  //并发模式
        this.setState(_ =>({num: _.num + 1}),()=>{console.log(2,this.state.num)}) 
        //this.setState(_ =>({num: _.num + 3}),()=>{console.log(2,this.state.num)})
        console.log(3,this.state.num)
        // console.log('修改后')
    }
    render(){
        console.log('render')
        let {num} = this.state
        return (
            <div>
                 <h1>类组件state状态</h1>
                <p>{num}</p>

                {/* 合成事件 */}
                <button onClick={this.addFun}> + 1</button>
            </div>
        )
    }
}


export default Demo4