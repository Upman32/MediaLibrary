import { Link } from 'react-router-dom'
import classes from './Header.module.css'
const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.menu}>
        <Link to="/ " className={classes.item_menu}>Main</Link>
        <Link to="/media" className={classes.item_menu}>Media</Link>
        <Link to="/about" className={classes.item_menu}>About</Link>
      </div>
    </div>
  )
}

export default Header
