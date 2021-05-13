import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.module.css';
import s from './Header.module.css'




const Header= () => {
    return(
     <header className={s.header}>
         <div className={`${s.item} ${s.active}`}>
             <NavLink to ="/profile">Profile</NavLink>
         </div>
         <div className={s.item}>
             <NavLink to ="/registration" activeClassName={s.activeLink}>Registration</NavLink>
         </div>
         <div className={s.item}>
             <NavLink to ="/login" activeClassName={s.activeLink}>Login</NavLink>
         </div>
         <div className={s.item}>
             <NavLink to="/error">Error</NavLink>
         </div>
    </header>
    )
}

export default  Header;