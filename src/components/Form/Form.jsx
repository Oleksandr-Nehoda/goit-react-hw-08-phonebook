import { useState } from 'react';
import css from './Form.module.css';

export function Form ({onSubmit}) {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handleChange (event) {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name' : setName(value);
      break;
      case 'number' : setNumber(value);
      break;
      default: console.log("Invalid data type");
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({name, number});
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

    return (
      <div className={css.form_box}>
        <form className={css.contact_form} onSubmit={handleSubmit}>
          <label className={css.contact_lable}>
            Name
            <input
              className={css.input_name}
              type="text"
              value={name}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
            />
          </label>
          <label className={css.contact_lable}>
            Number
            <input
              className={css.input_num}
              type="tel"
              value={number}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
            />
          </label>
          <button className={css.contact_btn_add} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }

