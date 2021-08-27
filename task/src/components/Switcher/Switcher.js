import './Switcher.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setModeAction } from '../../redux/actionCreators/mode';

export const Switcher = () => {
  const dispatch = useDispatch();
  const isToggled = useSelector(state => state.listMode);
  return (
    <label className="switcher" htmlFor="switcher__input">
      <input
        type="checkbox"
        checked={isToggled}
        onChange={() => dispatch(setModeAction(!isToggled))}
        id="switcher__input"
      />
      <span className="material-icons switcher__icon-list"> format_list_bulleted </span>
      <span className="switcher__slider">
        <span className="material-icons switcher__icon-grid"> grid_view </span>
      </span>
    </label>
  );
};
