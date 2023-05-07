import {useSelector, useDispatch} from 'react-redux'
import {switchAdd,switchSub } from '@/store/actions'
import { Button } from 'antd';

function Goods(){
    // let size = useSelector(function(state){
    //     return state.app
    // })

    // 简写
    let {size} = useSelector(state =>state.app)
    const dispatch = useDispatch()

    const addFun = ()=>{
        // dispatch({type: "APP_SIZE_ADD",payload: 1})
        dispatch(switchAdd(1))
    }

    const addSub = ()=>{
        // dispatch({type: "APP_SIZE_SUB",payload: 2})
        dispatch(switchSub(2))
    }

    return (
        <div>
            <h2>商品列表</h2>
            <p>{size}</p>
            <button onClick={addFun}>+1</button>
            <button onClick={addSub}>-1</button>
            <Button type="primary">Primary Button</Button>
        </div>
    )
}

export default Goods