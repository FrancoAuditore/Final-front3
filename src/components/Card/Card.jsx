import React from 'react'
import styles from './Card.module.css'
import Favorites from '../../routes/Favorites'
const Card =({name, userName, addToFavorites, isFavorite }) =>{

    return(
<div className={styles.card}>
    <img className={styles.cardImg} src="src\assets\medico.avif"/>
    <h2>{userName}</h2>
    <p>{name}</p>
    <button onClick={addToFavorites}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
     {/* <img className={styles.star} src='src\assets\estrella.jpg'></img> */}
    
 </div>


    )
}
export default Card