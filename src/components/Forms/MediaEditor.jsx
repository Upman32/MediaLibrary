import { useDispatch, useSelector } from 'react-redux'
import { editorActions, mediaEditorConfirm } from '../../store/MediaEditor'
import { getDescription, getHeader, getMediaId, getPicture, getVisible } from '../../store/MediaEditor-selector'
import classes from './MediaEditor.module.css'

const MediaEditor = () => {

  const visible = useSelector(getVisible)
  const picture = useSelector(getPicture)
  const header = useSelector(getHeader)
  const description = useSelector(getDescription)
  const id = useSelector(getMediaId)
  const dispatch = useDispatch()  

  const closeEditor = () => {
    dispatch(editorActions.setVisible(false))
  }
  const onChangePicturetext = (event) => {
    dispatch(editorActions.setPicture(event.target.value))
  }
  const onChangeHeadertext = (event) => {
    dispatch(editorActions.setHeader(event.target.value))
  }
  const onChangeDescriptiontext = (event) => {
    dispatch(editorActions.setDescription(event.target.value))
  }

  const createMediaClick = () => {
    dispatch(mediaEditorConfirm())
  }
  return (<div>
    {visible &&
        <div className={classes.record}>
          <div className={classes.register}> <div>Put file picture</div>
            <input value={picture} onChange={onChangePicturetext} />
          </div>
          <div className={classes.register}><div>Enter header</div>
            <input value={header} onChange={onChangeHeadertext} />
          </div>
          <div className={classes.register}> <div>Enter description</div>
            <textarea value={description} onChange={onChangeDescriptiontext} />
          </div>
          <div>
            <button className={classes.decline_button} onClick={closeEditor}>Decline</button>
            <button className={classes.accept_button} onClick={createMediaClick}>{id===-1 ? 'Create' : 'Update'}</button>
          </div>
        </div> 
    }

  </div> )

}
export default MediaEditor