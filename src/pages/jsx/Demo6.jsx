import React, { useState } from 'react'

function Demo6(){
    let [abc,setAbc] = useState('')
    let [list,setList] = useState([])

    const getValue = (e)=>{
        // console.log(e.target.value)
        setAbc(abc => e.target.value)
    }

    const addFun = ()=>{
        let obj = {
            id: new Date().getTime(),
            title: abc
        }
        setList(list => [...list, obj])
    }

    const deleteFun = (id)=>{
       setList(list => list.filter(item => item.id !== id)) 
    }


    return (
        <div>
            <h1>表单</h1>
            <p>
                <input type='text' value={abc} onChange={e => getValue(e)}/>
                <button onClick={()=>{addFun()}}>添加</button>
            </p>
            <ul>
                {
                    list.map(item =>{
                        return <li key={item.id}>{item.id}-{item.title} <button onClick={()=>{deleteFun(item.id)}}>x</button></li>
                    })
                }
            </ul>

        </div>
    )
}

export default Demo6