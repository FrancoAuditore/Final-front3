import React, { useState, useEffect } from 'react';
import Card from '../components/Card/Card';

const Favorites = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    const storedCards = localStorage.getItem('favoriteCards');
    if (storedCards) {
      setFavoriteCards(JSON.parse(storedCards));
    }
  }, []);

  const removeFromFavorites = (cardId) => {
    const updatedFavoriteCards = favoriteCards.filter(
      (card) => card.id !== cardId
    );
    setFavoriteCards(updatedFavoriteCards);
    localStorage.setItem('favoriteCards', JSON.stringify(updatedFavoriteCards));
  };

  return (
    <div>
      <h2>Favoritos</h2>
      {favoriteCards.map((card) => (
        <Card
          key={card.id}
          username={card.username}
          name={card.name}
          removeFromFavorites={() => removeFromFavorites(card.id)}
          isFavorite={true}
        />
      ))}
    </div>
  );
};

export default Favorites;
