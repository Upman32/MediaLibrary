export const getVisible = (state) => {
  return state.mediaEditor.id >= -1
}
export const getHeader = (state) => {
  return state.mediaEditor.header
}
export const getPicture = (state) => {
  return state.mediaEditor.picture
}
export const getDescription = (state) => {
  return state.mediaEditor.description
}
export const getMediaId = (state) => {
  return state.mediaEditor.id
}