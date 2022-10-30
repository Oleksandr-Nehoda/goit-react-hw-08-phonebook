import { Component } from 'react';
import { Form } from './Form/Form';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
  };

  addContact = contact => {
    console.log(contact);
    contact.id = nanoid(10);
    console.log(contact);
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}
