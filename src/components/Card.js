import React from 'react';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context('../assets/characters', false, /\.(png|jpe?g|svg)$/)
);

export default function Card({ index }) {
  return <img className="cardImg" src={images[index]} alt={index} />;
}
