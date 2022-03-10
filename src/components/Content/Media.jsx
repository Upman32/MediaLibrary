import {useDispatch, useSelector} from 'react-redux'
import {getMediaFiles} from '../../store/Media-selector'
import classes from './Media.module.css'
import {actions} from '../../store/media'
import {callEditor} from '../../store/mediaEditor'
import MediaEditor from '../Forms/MediaEditor'

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
 
            <div className={classes.themepic}style={{
              background: `url(${media.picture}) no-repeat center `,
              backgroundSize: 'cover'
            }}>
              <div className={classes.media_buttons}>
     
                <span onClick={callEditorClick} index={key} className={classes.media_edit}>
              R
                </span>
                <span onClick={() => onMediaDelete(key)} className={classes.media_delete}>
              X
                </span>
              </div>
            </div>
            
            <h2>
              {media.header}
            </h2>
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