import { FC, useState, useEffect } from 'react';
import { cardData } from '../card-list/card-list-dummy-data';
import { Button } from '@ui-design';
import { Card } from '../card';
import styles from './card-list.module.scss';

export const CardList: FC = () => {
  const initialCardsCount = 6;
  const [cardsToShow, setCardsToShow] = useState(cardData.slice(0, initialCardsCount));
  const activeHandler = (id: number) => {
    // setCardDataUpdate((previousVal) => {
    //   return previousVal.map((item) =>
    //     item.id === id ? { ...item, isActive: true } : { ...item, isActive: false }
    //   );
    // });
  };

  // const cards = cardDataUpdate.map((item,index)=><Card key={index} activeHandler={activeHandler}{...item}/>)

  const [showAllCard, setShowAllCard] = useState(false);

  const cardLengthHandler = () => {
    setShowAllCard(!showAllCard);
  };

  useEffect(() => {
    if (showAllCard) {
      setCardsToShow(cardData);
    } else {
      setCardsToShow(cardData.slice(0, initialCardsCount));
    }
  }, [showAllCard]);

  return (
    <div className={styles.cards}>
      <div className={styles.cardContainer}>
        {cardsToShow.map((card) => (
          <Card activeHandler={activeHandler} key={card.id} {...card} />
        ))}
      </div>
      <Button
        onClick={cardLengthHandler}
        label={showAllCard ? 'Show less' : 'Show More'}
        variant="primary"
        className={styles.btnCardShow}
      />
    </div>
  );
};
