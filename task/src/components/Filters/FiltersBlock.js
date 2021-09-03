import { BrandFilters } from './BrandFilters';
import { PriceFilters } from './PriceFilters';
import { TypeFilters } from './TypeFilters';

export const FiltersBlock = () => {
  return (
    <div className="main__column">
      <form className="form">
        <TypeFilters />
        <BrandFilters />
        <PriceFilters />
      </form>
    </div>
  );
};
