import {produce} from 'immer'

const initState = {
    list:[
        {
            name:'吃饭',
            id:Date.now()-11,
            ischeck:false
        }
        ,
        {
            name:'睡觉',
            id:Date.now()-21,
            ischeck:false
            
        },
        {
            name:'打豆豆',
            id:Date.now()-31,
            ischeck:false
        },
        {
            name:'敲代码',
            id:Date.now()-41,
            ischeck:false
        },
    ]
}

function reducer(state = initState,action){
    return produce(state,(newState)=>{
        switch(action.type){
            case "LIST_PUSH":
                newState.list.push(action.payload) 
                break;   
            case "LIST_DELETE":
                newState.list = state.list.filter(item=>item.id !== action.payload)
                console.log(newState.list)
                break; 
            case "ITEM_CHECK":
                for(let i = 0 ; i<newState.list.length ; i++){
                   if(newState.list[i].id === action.payload.id){
                    newState.list[i].ischeck = !action.payload.data
                   }
                }
                break; 
            case "ALL_CHECK":
                for(let i = 0 ; i<newState.list.length ; i++){
                    newState.list[i].ischeck = action.payload 
                }
                break;
            case "FILTER_THREE":
                newState.list = state.list.filter(item=>item.ischeck === false)
                break; 
            default:
        }
    })
}

export default reducer