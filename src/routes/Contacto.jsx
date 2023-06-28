import styles from './Contacto.module.css'

const Contacto = (props) =>{

    console.log(styles)

    return (
        <div className={styles.mainContacto}>
        <div className={styles.card}>
            <img className={styles.cardImg} src="src\assets\medico.avif"/>
            <p>NAME</p>
        </div>
        </div>

    )
}

export default Contacto