import styles from './Card.module.css'

const Card =() =>{

    console.log(styles)

    return(
<div className={styles.card}>
    <img className={styles.cardImg} src="src\assets\medico.avif"/>
    <p>UserName</p>
    <p>Name</p>
    <button>
     <img src='../assets/star.jpg'></img>
    </button>
 </div>


    )
}
export default Card