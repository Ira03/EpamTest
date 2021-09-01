import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Filter } from './Filter';

export const BrandFilters = () => {
  const brands = ['samsung', 'apple', 'xiaomi', 'honor', 'huawei'];
  const addFilters = ['lenovo', 'nokia', 'htc', 'philips'];
  const [filters, setFilters] = useState(brands);
  const [isClicked, setIsClicked] = useState(true);
  const [isAllFilters, setIsAllFilters] = useState(false);

  useEffect(() => {
    if (isAllFilters) {
      setFilters([...brands, ...addFilters]);
    } else {
      setFilters(brands);
    }
  }, [isAllFilters]);
  return (
    <div className="form__item">
      <h2 className="form__title">Бренд</h2>
      <button
        type="button"
        className={isClicked ? 'btn-expand' : 'btn-expand active'}
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        <span className="material-icons">expand_more</span>
      </button>
      {isClicked &&
        filters.map(item => {
          return <Filter value={item} type="brand" key={uuidv4()} />;
        })}
      {isClicked && (
        <button className="btn-input" type="button" onClick={() => setIsAllFilters(!isAllFilters)}>
          {isAllFilters ? 'Скрыть' : 'Показать еще'}
        </button>
      )}
    </div>
  );
};
