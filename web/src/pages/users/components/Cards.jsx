import React from 'react';
import '../css/Cards.css';
import { cardsData } from '../Data/Data';

import Card from './Card';
/* eslint-disable */
const Cards = () => {
    /* eslint-disable */
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Cards;