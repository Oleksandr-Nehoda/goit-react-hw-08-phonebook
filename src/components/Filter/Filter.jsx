import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { contactsFilter, getFilter } from '../../redux/sliceFilter';

export const Filter = () => {
  const dispatch = useDispatch();
  // Redux отримуєм з сховища дані
  const filter = useSelector(getFilter);

  // Ф-ція запису фільтра в стор
  const changeFilter = event => {
    dispatch(contactsFilter(event.target.value));
  };

  return (
    <div className={css.filter_box}>
      <label>
        <span className={css.filter_tittle}>Find contacts by name</span>
        <input
          className={css.filter_input}
          type="text"
          value={filter}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};

Filter.protoType = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
