import { Component } from 'react';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = addContact => {
    const { contacts } = this.state;
    addContact.id = nanoid(10);
    if (contacts.find(contact => contact.name === addContact.name)) {
      return alert(`${addContact.name} is already is contacts`);
    }
    this.setState(prevState => ({
      contacts: [addContact, ...prevState.contacts],
    }));
  };

  onChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filterName = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = idCont => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== idCont),
    }));
  };

  render() {
    this.filterName();
    const { filter } = this.state;
    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2 className={css.contact_title}>Contacts</h2>
        <Filter value={filter} onChange={this.onChange} />
        <ContactList
          contacts={this.filterName()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
