import { useState } from 'react';

export const Button = () => {
  const [isClicked, setClicked] = useState(false);
  return (
    <button className={isClicked ? 'card__btn clicked' : 'card__btn'} onClick={() => setClicked(!isClicked)}>
      <span className="material-icons"> shopping_cart </span>
      <span>{isClicked ? 'В корзине' : 'В корзину'}</span>
    </button>
  );
};
