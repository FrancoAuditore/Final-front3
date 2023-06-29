import React from "react"
import styles from './home.module.css'

const Home = () => {
  console.log(styles)
    return (
<div className={styles.mainHome}>
 <div className={styles.card}>
    <img className={styles.cardImg} src="src\assets\medico.avif"/>
    <p>UserName</p>
    <p>Name</p>
    <button>
     <img src='../assets/star.jpg'></img>
    </button>
 </div>
 </div>
    )
  }
  export default Home