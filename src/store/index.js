import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import app from './module/app'
import user from './module/user'
import list from './module/list'
import options from './module/options'


const reducer =  combineReducers({
    app,
    user,
    list,
    options
})


// compose(applyMiddleware(thunk),applyMiddleware(logger))
// 管理员
const store = createStore(reducer,compose(applyMiddleware(thunk),applyMiddleware(logger)))

console.log(store.getState())

export default store