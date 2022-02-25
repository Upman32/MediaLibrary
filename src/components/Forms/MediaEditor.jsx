import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { callEditor } from '../../store/MediaEditor'
import { getVisible } from '../../store/MediaEditor-selector'
import { makeMedia } from '../../store/MediaReducer'
import classes from './MediaEditor.module.css'

const MediaEditor = () => {
  const picture = useRef()
  const header = useRef()
  const description = useRef()

  const visible = useSelector(getVisible)

  const dispatch = useDispatch()  

  const onVisibleChanged = (visible) => {
    dispatch(callEditor(visible))
  }
  const onVisibleDisable = () => {
    onVisibleChanged(false)
  }

  const createMedia = (picture, header, description) => {
    dispatch(makeMedia(picture.current.value, header.current.value,description.current.value))
  }
  return (<div>
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
    {visible && <div>
      <button className={classes.decline_button} onClick={() => onVisibleDisable()}>Decline</button>
      <button className={classes.accept_button} onClick={() => createMedia(picture, header, description)}>Accept</button>
    </div>}
  </div> )

}
export default MediaEditor