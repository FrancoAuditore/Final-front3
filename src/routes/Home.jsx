import React, { useEffect, useState } from "react"
import styles from './home.module.css'
import Card from "../components/Card/Card"
import '../styles/styles.css'

const Home = () => {
      const [odontologos, setOdontologos] = useState([]);
      const [error, setError] = useState(null);
    
      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(odontologos => {
            setOdontologos(odontologos);
          })
          .catch(error => {
            setError(error);
          });
      }, []);
    
      if (error) {
        return <p>Error al obtener los datos de la API: {error.message}</p>;
      }
      console.log(odontologos);
  return (
      <div className={styles.cards}>
    
        {odontologos.map(odontologo => (
        <Card key={odontologo.id}
         name={odontologo.name} 
         userName={odontologo.username} />
      ))}
   

      </div>
    )
  
}
  export default Home