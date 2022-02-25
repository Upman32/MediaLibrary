import { callEditor } from './MediaEditor'
let initialState = {
  mediaFiles:[ 
    {picture: 'picture', header: 'header', description: 'description description description description description' },
    {picture: 'picture', header: 'header', description: 'description description description description description' },
    {picture: 'picture', header: 'header', description: 'description description description description description' }],
}
const mediaReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'SET_MEDIA_INFO':  
    return {
      ...state,
      mediaFiles: action.mediaFiles
    }
  case 'CREATE_MEDIA':  
    return {
      ...state,
      mediaFiles: [...state.mediaFiles, {
        picture:action.payload.picture, 
        header: action.payload.header, 
        description: action.payload.description
      }]
    }
  default:
    return state
  }
}
export const actions = {
  addMedia: (payload) => ({type:'CREATE_MEDIA', payload}),
  setMedia: (mediaFiles) => ({ type: 'SET_MEDIA_INFO', mediaFiles }),
  
}
export const makeMedia = (picture, header, description) => (dispatch) => {
  dispatch(actions.addMedia({picture, header, description}))
  dispatch(callEditor(false))
}
export default mediaReducer