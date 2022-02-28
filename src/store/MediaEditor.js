import {createMedia, updateMedia } from './MediaReducer'

let initialState = {
  visible:false,
  picture:'',
  header:'',
  description:'',
  id:-1
}
const editorReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_VISIBLE':  
    return {
      ...state,
      visible: action.visible
    }
  case 'SET_PICTURE':  
    return {
      ...state,
      picture: action.payload
    }
  case 'SET_HEADER':  
    return {
      ...state,
      header: action.payload
    }
  case 'SET_DESCRIPTION':  
    return {
      ...state,
      description: action.payload
    }
  case 'SET_MEDIA_DATA':  
    return {
      ...state,
      ...action.payload
    }
  case 'SET_MEDIA_ID':  
    return {
      ...state,
      id:action.payload
    }
  default:
    return state
  }
}
export const editorActions = {
  setVisible: (visible) => ({type: 'SET_VISIBLE', visible}),
  setPicture: (picture) =>({type:'SET_PICTURE', payload:picture}),
  setHeader: (header) =>({type:'SET_HEADER', payload:header}),
  setDescription: (description) =>({type:'SET_DESCRIPTION', payload:description}),
  setMediaData: (payload) =>({type:'SET_MEDIA_DATA', payload}),
  setMediaId: (payload) =>({type:'SET_MEDIA_ID', payload})
}

export const callEditor = (id) => (dispatch, getState) => {
  if (id===-1) {
    dispatch(editorActions.setMediaData({
      picture:'', 
      header:'',
      description:''
    }))
  } else {
    const {mediaFiles} = getState().MediaPage
    const {picture, header, description} = mediaFiles[id]
    dispatch(editorActions.setMediaData({picture, header, description}))
  }
  dispatch(editorActions.setMediaId(id))
  dispatch(editorActions.setVisible(true))

}
export const mediaEditorConfirm = () => (dispatch, getState) => {
  const {id, picture, header, description} = getState().EditorForm
  if (id===-1) {
    dispatch(createMedia({picture, header, description}))
  } else {
    dispatch(updateMedia(id, {picture, header, description}))
  }

}

export default editorReducer