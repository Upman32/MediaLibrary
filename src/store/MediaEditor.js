import {createMedia, updateMedia} from './media'
const EMPTY_MEDIA = {
  picture: '', 
  header: '',
  description: ''
}
// id<=-2 - editor will be hidden 
// id=-1 - editor will create new media object
// id=[0,length] - editor will take media from library 

let initialState = {
  picture: '',
  header: '',
  description: '',
  id: -2
}
const mediaEditor = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_MEDIA_DATA':  
    return {
      ...state,
      ...action.payload
    }
  case 'UPDATE_MEDIA': {
    const obj = {
    }

    obj[action.payload.field]=action.payload.value
    return {
      ...state,
      ...obj
    }}  
  default:
    return state
  }
  
}
export const editorActions = {
  setMediaData: (payload) => ({
    type: 'SET_MEDIA_DATA', payload
  }),
  updateMedia: (value, field) => ({
    type: 'UPDATE_MEDIA', payload: {
      value, field
    }
  }),
  closeEditor: () => ({
    type: 'UPDATE_MEDIA', payload: {
      value: -2, field: 'id'
    }
  })
}

export const callEditor = (id) => (dispatch, getState) => {
  if (id===-1) {
    dispatch(editorActions.setMediaData(EMPTY_MEDIA))
  } else {
    const {mediaFiles} = getState().media
    const {picture, header, description} = mediaFiles[id]
    dispatch(editorActions.setMediaData({
      picture, header, description
    }))
  }
  dispatch(editorActions.updateMedia(id, 'id'))
}

export const mediaEditorConfirm = () => (dispatch, getState) => {
  const {id, picture, header, description} = getState().mediaEditor
  
  if (id===-1) {
    dispatch(createMedia({
      picture, header, description
    }))
  } else {
    dispatch(updateMedia(id, {
      picture, header, description
    }))
  }
  dispatch(editorActions.closeEditor())
}
export default mediaEditor