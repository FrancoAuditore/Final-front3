import React from "react"
import styles from './home.module.css'
import Card from "../components/Card/Card"
import '../styles/styles.css'

const Home = () => {
  console.log(styles)
    return (
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
  export default Home