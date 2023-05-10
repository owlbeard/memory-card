import React, { useState } from 'react';
import Card from './Card';
import Scoreboard from './Scoreboard';
import uniqid from 'uniqid';
import Header from './Header';
import Footer from './Footer';

export default function Cards() {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let clickedCards = [];
  const [state, setState] = useState({ score: 0, highScore: 0 });
  let score = 0;
  let highScore = 0;
  const [cards, setCards] = useState(initialCards());

  function initialCards() {
    let cards = [];
    let index = shuffle(arr);
    index.forEach((number, index) => {
      cards.push(
        <div
          className="card"
          onClick={function (e) {
            clicked(e);
            shuffleCards();
          }}
          key={uniqid()}
        >
          <Card key={index} index={number} />
        </div>
      );
    });
    return cards;
  }
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  function shuffleCards() {
    let cards = [];
    let index = shuffle(arr);
    index.forEach((number, index) => {
      cards.push(
        <div
          className="card"
          onClick={function (e) {
            clicked(e);
            shuffleCards();
          }}
          key={uniqid()}
        >
          <Card key={index} index={number} />
        </div>
      );
    });
    setCards(cards);
  }
  function clicked(e) {
    let index = e.target.getAttribute('alt');
    if (clickedCards.includes(index)) {
      setState((prevState) => {
        return { ...prevState, score: 0 };
      });
      clickedCards = [];
    } else {
      setState((prevState) => {
        score = prevState.score + 1;
        if (score >= highScore) {
          highScore = score;
          return { ...prevState, score: score, highScore: score };
        }
        return { ...prevState, score: prevState.score + 1 };
      });
    }
    clickedCards.push(index);
  }
  return (
    <div className="container">
      <div className="headerBoard">
        <Scoreboard score={state.score} highScore={state.highScore} />
        <Header />
        <Footer />
      </div>
      <div className="cards">{cards}</div>
    </div>
  );
}
