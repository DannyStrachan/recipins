import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer'
import recipinReducer from './recipinReducer'

const rootReducer = combineReducers({
    user: userReducer,
    recipins: recipinReducer
})

export default createStore(rootReducer, compose(applyMiddleware(promiseMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

