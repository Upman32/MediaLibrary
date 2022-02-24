import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getMediaFiles, getVisible } from '../store/Media-selector'
import { callEditor } from '../store/MediaReducer'
import classes from './Media.module.css'

const Media = () => {

  const mediaFiles = useSelector(getMediaFiles)
  const visible = useSelector(getVisible)

  const dispatch = useDispatch()  

  const onVisibleChanged = (visible) => {
    dispatch(callEditor(visible))
  }

  return (
    <div className={classes.content}>
      <div className={classes.menu}>
        {mediaFiles.map( bl => 
          <div key={bl.id} className={classes.menu_block}>
            <div>
              {bl.picture}
            </div>
            <div>
              {bl.header}
            </div>
            <div>
              {bl.description}
            </div>
          </div>
        )}
      </div>
      <div className={classes.media_creation}>
        {visible &&
        <div className={classes.record}>
          <div className={classes.register}> <div>Put file picture</div>
            <input/>
          </div>
          <div className={classes.register}><div>Enter header</div>
            <input/>
          </div>
          <div className={classes.register}> <div>Enter description</div>
            <textarea/>
          </div>
        </div> 
        }
        {!visible &&
        <button className={classes.create_button} onClick={() => onVisibleChanged(true)}>Create</button>
        }
        {visible && <div>
          <button className={classes.accept_button}>Accept</button>
          <button className={classes.decline_button} onClick={() => onVisibleChanged(false)}>Decline</button>
        </div>}
      </div>
    </div>
  )

}
export default Media