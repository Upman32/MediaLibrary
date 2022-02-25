import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { callEditor } from '../../store/MediaEditor'
import { getVisible } from '../../store/MediaEditor-selector'
import { getMediaFiles } from '../../store/Media-selector'
import { makeMedia } from '../../store/MediaReducer'
import classes from './Media.module.css'

const Media = () => {
  const picture = useRef()
  const header = useRef()
  const description = useRef()

  const mediaFiles = useSelector(getMediaFiles)
  const visible = useSelector(getVisible)

  const dispatch = useDispatch()  

  const onVisibleChanged = (visible) => {
    dispatch(callEditor(visible))
  }
  const onVisibleDisable = () => {
    onVisibleChanged(false)
  }
  const onVisibleEnable = () => {
    onVisibleChanged(true)
  }
  const createMedia = (picture, header, description) => {
    dispatch(makeMedia(picture.current.value, header.current.value,description.current.value))
  }
  return (
    <div className={classes.content}>
      <div className={classes.menu}>
        {mediaFiles.map( (media, key) => 
          <div key={key} className={classes.menu_block}>
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
        {visible &&
        <div className={classes.record}>
          <div className={classes.register}> <div>Put file picture</div>
            <input ref={picture}/>
          </div>
          <div className={classes.register}><div>Enter header</div>
            <input ref={header}/>
          </div>
          <div className={classes.register}> <div>Enter description</div>
            <textarea ref={description}/>
          </div>
        </div> 
        }
        {!visible &&
        <button className={classes.create_button} onClick={() => onVisibleEnable()}>Create</button>
        }
        {visible && <div>
          <button className={classes.accept_button} onClick={() => createMedia(picture, header, description)}>Accept</button>
          <button className={classes.decline_button} onClick={() => onVisibleDisable()}>Decline</button>
        </div>}
      </div>
    </div>
  )

}
export default Media