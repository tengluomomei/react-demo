import React, {useState} from 'react'
const myContext = React.createContext() // 创建上下文
const {Provider, Consumer } = myContext

class Child extends React.Component{
    render(){
        return (
            <Consumer>
                {
                    (ctx)=>{
                        return (
                            <div style={JSON.parse(ctx)}>子组件-{ctx}</div>
                        )
                    }
                }
            </Consumer>
        )
    }
}

function Parent(props){
    return (
        <div>
            <h2>父组件</h2>
            <Child></Child>
        </div> 
    )
}

function Demo13(){
    let [theme, setTheme] = useState({color: '#000000', background: '#ffffff'})

    const changeFun = (e)=>{
        const key = e.target.name
        const value = e.target.value
        setTheme({...theme,[key]: value})
    }

    return (
        <Provider value={JSON.stringify(theme)}>
            <div>
                <h2>颜色选择器</h2>
                <Parent></Parent>

                <div>
                    文字颜色：<input type='color' name='color' value={theme.color} onChange={e => changeFun(e)}/>
                    背景颜色：<input type='color' name='background'  value={theme.background} onChange={e => changeFun(e)}/>
                </div>
            </div>
        </Provider>
        
    )     
}

export default Demo13