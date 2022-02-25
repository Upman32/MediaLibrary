
let initialState = {
  visible:false
}
const editorReducer = (state = initialState, action) => {
  switch (action.type) {
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
  setVisible: (visible) => ({type: 'SET_VISIBLE', visible})
}

export const callEditor = (visible) => (dispatch) => {
  dispatch(actions.setVisible(visible))
}
export default editorReducer