import React from 'react'
import styles from './Footer.module.css'


const Footer = () => {
  console.log(styles);
  return (
    <footer className={styles.footer}>
      <div>
        <h2>Powered by</h2>
        <img src="src\assets\DH.png" alt='DH-logo' />
      </div>
    </footer>
  )
}

export default Footer