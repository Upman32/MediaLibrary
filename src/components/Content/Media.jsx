import { useDispatch, useSelector } from 'react-redux'
import { callEditor } from '../../store/MediaEditor'
import { getMediaFiles } from '../../store/Media-selector'
import classes from './Media.module.css'
import MediaEditor from '../Forms/MediaEditor'
import { actions } from '../../store/MediaReducer'

const Media = () => {
  const mediaFiles = useSelector(getMediaFiles)

  const dispatch = useDispatch()  

  const onMediaDelete = (key) => {
    dispatch(actions.deleteMedia(key))
  }
  const callEditorClick = (event) => {
    const index = parseInt(event.target.getAttribute('index'))
    dispatch(callEditor(index))
  }

  return (
    <div className={classes.content}>
      <div className={classes.menu}>
        {mediaFiles.map( (media, key) => 
          <div key={key} className={classes.menu_block}>
            <div className={classes.media_buttons}>
              <span onClick={()=>onMediaDelete(key)} className={classes.delete_button}>
              X
              </span>
              <span onClick={callEditorClick} index={key} className={classes.delete_button}>
              R
              </span>
            </div>
            <div>
              {media.picture}
            </div>
            <div>
              {media.header}
            </div>
            <div>
              {media.description}
            </div>
          </div>
        )}
      </div>
      <div className={classes.media_creation}>

        <button
          className={classes.create_button} 
          index="-1" 
          onClick={callEditorClick}
        >
          Create
        </button>
        <MediaEditor/>
      </div>
    </div>
  )

}
export default Media