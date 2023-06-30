import React, { useState } from 'react';
import Card from '../components/Card/Card';

const Favorites = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  const addToFavorites = (card) => {
    setFavoriteCards([...favoriteCards, card]);
  };

  return (
    <div>
      <h2>Favoritos</h2>
      {favoriteCards.map((card, index) => (
        <Card key={index} username={card.username} name={card.name} />
      ))}
    </div>
  );
};

export default Favorites;
