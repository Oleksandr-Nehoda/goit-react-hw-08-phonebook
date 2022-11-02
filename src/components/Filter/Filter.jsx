import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter_box}>
      <label>
        <span className={css.filter_tittle}>Find contacts by name</span>
        <input
          className={css.filter_input}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Filter.protoType = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
