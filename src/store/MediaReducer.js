
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
      mediaFiles: action.payload
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
  case 'DELETE_MEDIA':  
    return {
      ...state,
      mediaFiles: state.mediaFiles.filter((_, index) => index !== action.payload)
    }
  case 'UPDATE_MEDIA':{  
    const mediaFiles = [...state.mediaFiles]
    mediaFiles[action.payload.id] = action.payload.media
    return {
      ...state, 
      mediaFiles
    }}
  default:
    return state
  }
}
export const actions = {
  addMedia: (payload) => ({type:'CREATE_MEDIA', payload}),
  setMedia: (mediaFiles) => ({ type: 'SET_MEDIA_INFO', payload:mediaFiles }),
  deleteMedia: (index) => ({ type: 'DELETE_MEDIA', payload:index }),
  updateMedia: (id, media) => ({ type: 'UPDATE_MEDIA', payload:{id, media} }),
}
export const createMedia = (media) => (dispatch) => {
  dispatch(actions.addMedia(media))
}
export const updateMedia = (id, media) => (dispatch) => {
  dispatch(actions.updateMedia(id, media))
}
export default mediaReducer