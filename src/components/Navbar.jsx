import React from 'react';
import styles from './Navbar.module.css'
const Navbar = () => {
  console.log(styles)
  return (
    <>
      <nav className={styles.navbar}>
       <ul>
        <li>Dentistas</li>
        <li>Contacto</li>
        <li>Favoritos</li>
        <button>Change theme</button>
       </ul>
      </nav>
    </>

  );
};

export default Navbar;