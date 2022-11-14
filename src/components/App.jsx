import { useState, useEffect } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export const App = () => {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

useEffect(() => {
  const getLocStorageContacts = JSON.parse(localStorage.getItem('contacts'));
  if (getLocStorageContacts && getLocStorageContacts.length !== 0) {
    setContacts(getLocStorageContacts);
  } }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

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

    return (
      <div>
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

