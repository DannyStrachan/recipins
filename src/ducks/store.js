import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
// import {composeWithDevTools} from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer'
import recipinReducer from './recipinReducer'
import edibleReducer from './edibleReducer';

const rootReducer = combineReducers({
    user: userReducer,
    recipinsReducer: recipinReducer,
    edibles: edibleReducer
})

// export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware), autoRehydrate()));

export default createStore(rootReducer, compose(applyMiddleware(promiseMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
