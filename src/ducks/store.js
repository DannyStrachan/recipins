import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
// import {composeWithDevTools} from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer'
import recipinReducer from './recipinReducer'

const rootReducer = combineReducers({
    user: userReducer,
    recipinsReducer: recipinReducer
})

// export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware), autoRehydrate()));

export default createStore(rootReducer, compose(applyMiddleware(promiseMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// import { createStore, applyMiddleware } from 'redux'
// import { persistStore } from 'redux-persist'
// import promiseMiddleware from 'redux-promise-middleware';
// import logger from 'redux-logger'

// import rootReducer from './root-reducer'

// const middlewares = [logger, promiseMiddleware]

// export const store = createStore(rootReducer, applyMiddleware(...middlewares))

// export const persistor = persistStore(store)

// export default { store, persistor }
