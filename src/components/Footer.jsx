import React from 'react'
import styles from './Footer.module.css'


const Footer = () => {
  console.log(styles);
  return (
    <footer className={styles.footer}>
        <p>Powered by</p>
        <img src="./img/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer