import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Filter } from './Filter';

export const TypeFilters = () => {
  const filters = ['smartphone', 'iPhone'];
  const [isClicked, setIsClicked] = useState(true);
  return (
    <div className="form__item">
      <h2 className="form__title">Категория</h2>
      <button
        type="button"
        className={isClicked ? 'btn-expand' : 'btn-expand active'}
        onClick={() => setIsClicked(!isClicked)}
      >
        <span className="material-icons">expand_more</span>
      </button>
      {isClicked &&
        filters.map(item => {
          return <Filter value={item} type="type" key={uuidv4()} />;
        })}
    </div>
  );
};
