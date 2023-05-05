import { createStore, combineReducers, applyMiddleware } from "redux";
import app from './module/app'
import user from './module/user'

const reducer =  combineReducers({
    app,
    user
})


// 管理员
const store = createStore(reducer)

console.log(store.getState())

export default store