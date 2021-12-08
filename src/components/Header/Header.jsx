import React from 'react'
import styles from "./Header.module.scss"
import {NavLink} from "react-router-dom"
const Header = () => {
    return (
        <div className={styles.header__wrapper}>
             <div className="app__wrapper">
              <header className={styles.header}>
               
               <div className={styles.header__logo}>
                   <img src="https://kyrgyzpost.kg/wp-content/uploads/2019/01/logo_top.gif" alt="Logo" />
               </div>
               <nav className={styles.header__navbar}>
               <NavLink activeClassName={styles.active} to="/main">
                   ГЛАВНАЯ
               </NavLink>
               <NavLink activeClassName={styles.active} to="/tarifs">
                   ТАРИФЫ
               </NavLink >
               <NavLink activeClassName={styles.active}  to="/services">
                  УСЛУГИ
               </NavLink>
               <NavLink activeClassName={styles.active} to="/secure">
                   ПРОТИВОДЕЙСТВИЕ КОРРУПЦИИ
               </NavLink>
               <NavLink activeClassName={styles.active} to="/track">
                   ОТСЛЕДИТЬ ПОСЫЛКУ
               </NavLink>
               </nav>
           </header>
                    
                    
             </div>
           
        </div>
    )
}

export default Header
