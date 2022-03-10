
import books from '../images/book'
import skateboard from '../images/skateboard'
import house from '../images/house'

let initialState = {
  mediaFiles: [ 
    {
      picture: books, header: 'John Ronald Reuel Tolkien', 
      description: 'Besides the well known Middle-Earth related works, he wrote more than 29 books, then translated or contributed to 36 more books, and made contributions to 39 periodicals'
    },
    {
      picture: skateboard, header: 'Skaterboy - Single by Avril Lavigne', 
      description: ' is a song by Canadian singer-songwriter Avril Lavigne, released as the second single from her debut album, Let Go (2002). It was written by Lavigne and The Matrix (Scott Spock, Lauren Christy, and Graham Edwards), and produced by The Matrix. '
    },
    {
      picture: house, header: 'House rent', 
      description: 'Bristol City Council is expected to ask the government to trial a cap on rent prices.'
    }],
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
        picture: action.payload.picture,  
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
  addMedia: (payload) => ({
    type: 'CREATE_MEDIA', payload
  }),
  setMedia: (mediaFiles) => ({
    type: 'SET_MEDIA_INFO', payload: mediaFiles
  }),
  deleteMedia: (index) => ({
    type: 'DELETE_MEDIA', payload: index
  }),
  updateMedia: (id, media) => ({
    type: 'UPDATE_MEDIA', payload: {
      id, media
    }
  }),
}
export const createMedia = (media) => (dispatch) => {
  dispatch(actions.addMedia(media))
}
export const updateMedia = (id, media) => (dispatch) => {
  dispatch(actions.updateMedia(id, media))
}
export default mediaReducer