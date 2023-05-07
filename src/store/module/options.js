import {produce} from 'immer'

const initState = {
    opt: 'all'
}

function reducer(state = initState,action){
    return produce(state,(newState)=>{
        switch(action.type){
            case "SET_FILTER":
                newState.opt = action.payload
                break;
            default:
        }
    })
}

export default reducer