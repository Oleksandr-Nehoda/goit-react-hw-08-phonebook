import { useState } from 'react';
import css from './Form.module.css';
import { useDispatch, useSelector} from 'react-redux';
import { getContacts  } from '../../redux/sliceContacts';
import {addContact} from '../../redux/operationsContacts'


export function Form () {

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

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  // Додаємо контакт на сервер
  const addNewContact = () => {
dispatch(addContact({name, number}));
  };

  const handleSubmit = event => {
    event.preventDefault();
   
    // Перевірка на наявність такого імені в контактах
    if (contacts.items.find(contact => contact.name === name)) {
      return alert(`${name} is already is contacts`);
    }
    addNewContact();
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

