import React, {useState, useContext, useRef} from 'react'
const myContext = React.createContext()
const {Provider, Consumer} = myContext


function Child(props){
    const ctx = useContext(myContext)
    return (
        <div>
            <p>{ctx}</p>
        </div> 
    )     
}

function Demo16(){
    let tit1 = useRef()
    let tit2 = useRef()
    const getRef = ()=>{
        console.log(tit2.current)
    }
    return (
        <Provider value={100}>
            <div>
                <h2>useContext</h2>
                <h2 ref={tit1}>useRef1</h2>
                <h2 ref={tit2}>useRef2</h2>
                <button onClick={()=>{getRef()}}>获取</button>
                <Child></Child>
            </div> 
        </Provider>
    )     
}

export default Demo16