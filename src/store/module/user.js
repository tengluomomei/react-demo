import {produce} from 'immer'

const initState ={
    token: null,
    userInfo: {}
}

function reducer(state = initState,action){
    return produce(state, (newState) =>{
        // 进行其他操作
    })
}

export default reducer