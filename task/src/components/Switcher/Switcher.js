import './Switcher.scss';

export const Switcher = () => {
  return (
    <label className="switcher" htmlFor="switcher__input">
      <input type="checkbox" id="switcher__input" />
      <span className="material-icons switcher__icon-list"> format_list_bulleted </span>
      <span className="switcher__slider">
        <span className="material-icons switcher__icon-grid"> grid_view </span>
      </span>
    </label>
  );
};
