import React,{useState} from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles(theme => ({
  button: {
    margin: 0,
    padding: '5px',
    color: 'gray',
  },
  input: {
    display: 'none',
  },
  
}));

const Navigation = props => {
  
const [style,setStyle] = useState('-100%');
const classes = useStyles();

return(
  <div className={s.header}>
    <NavLink to='/'><h3 className={s.logo}>LOGO</h3></NavLink>
    <a className={s.showMenuBtn} onClick = {() => setStyle('0')}>
      <i><MenuIcon /></i>
    </a>
      <ul className={s.menu} style={{right:`${style}`}} onClick = {() => setStyle('-100%')} >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to='/Card' style={{float:"right"}}>
            <IconButton color="primary" className={classes.button} aria-label="add to shopping cart">
               <ShoppingCartIcon />
               <p style={{fontSize:'12px',
               display:'contents',color:'#fff'}}>{props.card.length}</p>
            </IconButton>
          </NavLink>
          <a className={s.hideMenuBtn}>
            <i><CloseIcon /></i>
            </a>
      </ul>
  </div>
)
}
export default Navigation;