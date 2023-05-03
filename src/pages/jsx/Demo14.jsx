import React, {useState} from 'react'

function Demo14(){
    const [num, setNum] = useState(0)

    console.log('开始')
    const changeFun = (e)=>{
        console.log('重新渲染')
        setNum(num +1)
    }
    console.log('结束')

    return (
        <div>
            <h2>useState</h2>
            <div>
                {num}
                <button onClick={() => changeFun()}> + 1</button>
            </div>
        </div> 
    )     
}

export default Demo14