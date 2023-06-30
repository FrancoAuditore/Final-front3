import React, { useEffect, useState } from "react"
import styles from './home.module.css'
import Card from "../components/Card/Card"
import '../styles/styles.css'

const Home = () => {
  const [odontologos, setOdontologos] = useState([]);
  const [error, setError] = useState();
  const [favoriteCards, setFavoriteCards] = useState([]);

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

  useEffect(() => {
    const storedCards = localStorage.getItem('favoriteCards');
    if (storedCards) {
      setFavoriteCards(JSON.parse(storedCards));
    }
  }, []);

  const addToFavorites = (card) => {
    const isCardInFavorites = favoriteCards.some(
      (favoriteCard) => favoriteCard.id === card.id
    );

    if (!isCardInFavorites) {
      const updatedFavoriteCards = [...favoriteCards, card];
      setFavoriteCards(updatedFavoriteCards);
      localStorage.setItem('favoriteCards', JSON.stringify(updatedFavoriteCards));
    }
  };

  if (error) {
    return <p>Error al obtener los datos de la API: {error.message}</p>;
  }

  return (
    <div className={styles.cards}>
      {odontologos.map(odontologo => (
        <Card
          key={odontologo.id}
          name={odontologo.name}
          username={odontologo.username}
          addToFavorites={() => addToFavorites(odontologo)}
          isFavorite={favoriteCards.some(
            (favoriteCard) => favoriteCard.id === odontologo.id
          )}
        />
      ))}
    </div>
  );
}

export default Home;
