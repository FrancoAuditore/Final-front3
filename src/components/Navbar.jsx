import React from 'react';
// import styles from './Navbar.module.css';
import styles from '../index.css'
const Navbar = () => {
  console.log(styles); 
  return (
    <div className={styles.navbar}>
    <nav>
      <button>Change theme</button>
      <h1>hola</h1>
    </nav>
    </div>
  );
};

export default Navbar;
