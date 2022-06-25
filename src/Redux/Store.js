import {legacy_createStore,applyMiddleware,combineReducers} from 'redux'
import { TodoReducer } from './TodoReducer'
import thunk from 'redux-thunk'
import { LoginReducer } from './LoginReducer'

const rootReducer=combineReducers({
    Login:LoginReducer,
    TodoApp:TodoReducer
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))