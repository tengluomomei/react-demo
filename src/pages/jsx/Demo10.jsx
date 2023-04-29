import React, {useState} from 'react'

function Htemp(props){
    let {temp, onChange} = props
    const changeTemp = (e)=>{
        let targetTep = (Number(e.target.value) - 32) * 5 / 9 // 摄氏°
        onChange(targetTep)
    }

    return (
        <div>
            <h1>华氏温度</h1>
            <input type='text' value={temp * 9 / 5 + 32} onChange={(e)=>{changeTemp(e)}}/>
        </div>  
    )
}

function Stemp(props){
    let {temp, onChange} = props
    const changeTemp = (e)=>{
        onChange(e.target.value)
    }

    return (
        <div>
            <h1>摄氏温度</h1>
            <input type='text' value={temp} onChange={(e)=>{changeTemp(e)}}/>
        </div>  
    )
}


function Demo10(){
    let [temper, setTemper] = useState(0)
    
    const changeTempFun = (data)=>{
        setTemper(data)   
    }
    const abc = () =>{}
    
    return (
        <div>
            <Stemp temp={temper} onChange={changeTempFun} footer={()=>(abc())}></Stemp>
            <Htemp temp={temper} onChange={changeTempFun}></Htemp>
        </div>
    )
}

export default Demo10