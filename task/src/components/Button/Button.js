export const Button = ({ clickHandler }) => {
  return (
    <button className="card__btn" onClick={clickHandler}>
      <span className="material-icons"> shopping_cart </span>
      <span>В корзину</span>
    </button>
  );
};
