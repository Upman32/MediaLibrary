import classes from './Header.module.css'
const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.menu}>
        <div className={classes.item_menu}>Main</div>
        <div className={classes.item_menu}>Media</div>
        <div className={classes.item_menu}>About</div>
      </div>
    </div>
  )
}

export default Header
