import {combineReducers} from 'redux'
import authReducer from './authReducer'
import projectReducer from './authReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    projects: projectReducer
})

console.log(authReducer)

export default rootReducer