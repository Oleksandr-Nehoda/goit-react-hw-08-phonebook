import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';


export const App = () => {

    return (
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <Form/>
        <h2 className={css.contact_title}>Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    );
  }

