import { useState } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import {useLocalStorage} from '../hooks/useLocalStorage';
import css from './App.module.css';

// import {useSelector, useDispatch} from 'react-redux';
// import {increment, decrement} from '../redux/store';


export const App = () => {

  
  const [contacts, setContacts] = useLocalStorage('contacts', '');
  const [filter, setFilter] = useState('');

   const addContact = addContact => {
    addContact.id = nanoid(10);
    if (contacts.find(contact => contact.name === addContact.name)) {
      return alert(`${addContact.name} is already is contacts`);
    }
    setContacts(prevState => [addContact, ...prevState]
    );
  };

  const onChange = event => {
    setFilter(event.currentTarget.value);
  };

 const filterName = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = idCont => {
    setContacts(prevState => prevState.filter(contact => contact.id !== idCont)
    );
  };

// Тренувальний код

// const value = useSelector( state => state.myValue);
// const dispatch = useDispatch();

    return (
      <div>
        {/* <div>
          <button onClick={() => dispatch(increment(20))}>increment</button>
          <button onClick={() => dispatch(decrement(30))}>decrement</button>
          <span>{value}</span>
        </div> */}
        <h1 className={css.title}>Phonebook</h1>
        <Form onSubmit={addContact} />
        <h2 className={css.contact_title}>Contacts</h2>
        <Filter value={filter} onChange={onChange} />
        <ContactList
          contacts={filterName()}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }

