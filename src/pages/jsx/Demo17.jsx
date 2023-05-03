import React, {useState, useContext} from 'react'
const myContext = React.createContext()
const {Provider, Consumer} = myContext


// function Child(props){
//     const ctx = useContext(myContext)
//     return (
//         <div>
//             <p>{ctx}</p>
//         </div> 
//     )     
// }

const Child = React.forwardRef((props, ref)=>{
    const ctx = useContext(myContext)
    return (
        <div>
          <p>这是子组件{ctx}</p>
          <p className='box' ref={ref}>这是子组件{ctx}</p>
        </div> 
    )
})

class Demo17 extends React.Component{
    getRef(){
       // console.log(this.refs.box)
       console.log(this.refs.child)
    }
    render(){
        return (
            <Provider value={100}>
                <div>
                    <h2>useContext</h2>
                    <p ref='box'>这是一个box</p>
                    <button onClick={()=>{this.getRef()}}>获取</button>
                    <Child ref='child'></Child>
                </div> 
            </Provider>
        )    
    }
    
     
}

export default Demo17