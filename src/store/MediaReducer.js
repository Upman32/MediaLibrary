
let initialState = {
  mediaFiles:[ 
    { id: 0, picture: 'picture', header: 'header', description: 'description description description description description' },
    { id: 1, picture: 'picture', header: 'header', description: 'description description description description description' },
    { id: 2, picture: 'picture', header: 'header', description: 'description description description description description' }],
  visible:false
}
const mediaReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'SET_MEDIA_INFO':  
    return {
      ...state,
      mediaFiles: action.mediaFiles
    }
  case 'SET_VISIBLE':  
    return {
      ...state,
      visible: action.visible
    }

  default:
    return state
  }
}
export const actions = {
  setMedia: (mediaFiles) => ({ type: 'SET_MEDIA_INFO', mediaFiles }),
  setVisible: (visible) => ({type: 'SET_VISIBLE', visible})
}

export const callEditor = (visible) => (dispatch) => {
  dispatch(actions.setVisible(visible))

}
export default mediaReducer