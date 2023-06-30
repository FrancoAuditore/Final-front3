import React from 'react'
import styles from './Card.module.css'
import Favorites from '../../routes/Favorites'
const Card =({userName, name}) =>{

    return(
<div className={styles.card}>
    <img className={styles.cardImg} src="src\assets\medico.avif"/>
    <h2>{userName}</h2>
    <p>{name}</p>
    <button onClick={Favorites.addToFavorites}>Agregar a favoritos
     <img className={styles.star} src='src\assets\estrella.jpg'></img>
    </button>
 </div>


    )
}
export default Card