import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import mediaReducer from './MediaReducer'

let reducers = combineReducers({
  MediaPage: mediaReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store
export default store
