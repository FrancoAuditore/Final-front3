import React from 'react';
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  console.log(styles)
  return (
    <>
    <div className={styles.HeaderContainer}>

        <img src='src\assets\logo.png'></img>
      <nav className={styles.navbar}>
        <Link to='/home'>Dentistas</Link>
        <Link to='/contacto'>Contactanos</Link>
        <Link to='/favs'>Favoritos</Link>
      </nav>
        <button>Change theme</button>
    
    </div>
    </>

  );
};

export default Navbar;