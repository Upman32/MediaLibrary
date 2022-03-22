import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import mediaEditor from './mediaEditor'
import media from './media'

let reducers = combineReducers({
  media,
  mediaEditor
}) 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
window.store = store
export default store
