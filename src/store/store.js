import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import editorReducer from './MediaEditor'
import mediaReducer from './MediaReducer'

let reducers = combineReducers({
  MediaPage: mediaReducer,
  EditorForm: editorReducer
  
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
window.store = store
export default store
