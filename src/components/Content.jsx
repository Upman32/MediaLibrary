import classes from './Content.module.css'

const Content = () => {
  return (
    <div className={classes.content}>
      <div className={classes.menu}>
        <div className={classes.menu_block}>
          <div>
picture
          </div>
          <div>
header 
          </div>
          <div>
description description description description description  
          </div>
        </div>
        <div className={classes.menu_block}>
          <div>
picture
          </div>
          <div>
header
          </div>
          <div>
description description description description description  
          </div>
        </div>
        <div className={classes.menu_block}>
          <div className={classes.newspicture}>
picture
          </div>
          <div className={classes.slang}>
header
          </div>
          <div>
description description description description description  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
