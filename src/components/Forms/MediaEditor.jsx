import gsap from 'gsap'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {editorActions, mediaEditorConfirm} from '../../store/mediaEditor'
import {getDescription, getHeader, getMediaId, getPicture, getVisible} from '../../store/MediaEditor-selector'
import classes from './MediaEditor.module.css'
import c from '../Content/Media.module.css'
const MediaEditor = () => {
  const visible = useSelector(getVisible)
  const picture = useSelector(getPicture)
  const header = useSelector(getHeader)
  const description = useSelector(getDescription)
  const id = useSelector(getMediaId)
  const dispatch = useDispatch()  

  const closeEditorClick = () => {
    gsap.to(`.${c.menu}`, {
      duration: 1.2,
      opacity: 1
    })
    gsap.to(`.${c.create_button}`, {
      duration: 1.2,
      opacity: 1
    })
    dispatch(editorActions.closeEditor())
  }

  const onUpdateMedia = (event) => {
    const field = event.target.getAttribute('target-field')
    dispatch(editorActions.updateMedia(event.target.value, field))
  }
  
  const createMediaClick = () => {
    dispatch(mediaEditorConfirm())
    gsap.to(`.${c.menu} .${c.create_button}`, {
      duration: 2,
      opacity: 1
    })
  }
  useEffect(() => {
    gsap.from(`.${classes.record}`, {
      duration: 1.2,
      opacity: .1
    })
  }, [visible] )
  return (<div>
    {visible &&
        <div className={classes.record}>
          <div className={classes.register}> <div>Enter base64 picture</div>
            <textarea value={picture} target-field="picture" onChange={onUpdateMedia} />
          </div>
          <div className={classes.register}><div>Enter header</div>
            <input value={header} target-field="header" onChange={onUpdateMedia} />
          </div>
          <div className={classes.register}> <div>Enter description</div>
            <textarea value={description} target-field="description" onChange={onUpdateMedia} />
          </div>
          <div className={classes.option_bar}>
            <button className={classes.decline_button} onClick={closeEditorClick}>Decline</button>
            <button className={classes.accept_button} onClick={createMediaClick}>{id===-1 ? 'Create' : 'Update'}</button>
          </div> 
        </div> 
    }

  </div> )

}
export default MediaEditor