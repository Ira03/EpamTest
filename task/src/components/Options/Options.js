import PropTypes from 'prop-types';

export const Options = props => {
  const { screen, tech, process, memory, camera } = props;
  return (
    <ul className="card__list" data-testid="list">
      <li className="card__item">
        Экран: <span>{screen}</span>
      </li>
      <li className="card__item">
        Технология экрана: <span>{tech}</span>
      </li>
      <li className="card__item">
        Тип процессора: <span>{process}</span>
      </li>
      <li className="card__item">
        Встроенная память (ROM): <span>{memory} </span>
      </li>
      <li className="card__item">
        Основная камера МПикс: <span>{camera}</span>
      </li>
    </ul>
  );
};

Options.propTypes = {
  screen: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  process: PropTypes.string.isRequired,
  memory: PropTypes.string.isRequired,
  camera: PropTypes.string.isRequired,
};
