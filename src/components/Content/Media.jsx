import {useDispatch, useSelector} from 'react-redux'
import {getMediaFiles} from '../../store/Media-selector'
import classes from './Media.module.css'
import {actions} from '../../store/media'
import {callEditor} from '../../store/mediaEditor'
import MediaEditor from '../Forms/MediaEditor'
import {FiSettings} from 'react-icons/fi'
import {AiOutlineDelete} from 'react-icons/ai'
import {useEffect} from 'react'
import gsap, {Power3} from 'gsap'

const Media = () => {
  const mediaFiles = useSelector(getMediaFiles)

  const dispatch = useDispatch()  
  
  const onMediaDelete = (key) => {
    dispatch(actions.deleteMedia(key))
  }
  
  const callEditorClick = (event) => {
    gsap.to(`.${classes.menu} .${classes.menu}`, {
      duration: 2,
      opacity: 0
    })
    const index = parseInt(event.target.getAttribute('index'))
    dispatch(callEditor(index))
  }
  useEffect(() => {
    gsap.from(`.${classes.content}`, {
      duration: 1.2,
      x: -1500,
      ease: Power3.easeIn,
      opacity: .1
    })
  }, [

  ])

  return (
    <div className={classes.content}>
      <div className={classes.menu}>
        {mediaFiles.map( (media, key) => 
          <div key={key} className={classes.menu_block}>
 
            <div className={classes.themepic}style={{
              background: `url(${media.picture}) no-repeat center`,
              backgroundSize: 'cover'
            }}>
              <div className={classes.media_buttons}>
     
                <AiOutlineDelete onClick={() => onMediaDelete(key)} className={classes.media_delete} /> 
              </div>
            </div>
            
            <h2>
              {media.header}
            </h2>
            <div>
              {media.description}
            </div>
            <FiSettings onClick={callEditorClick} index={key} className={classes.media_edit} />
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