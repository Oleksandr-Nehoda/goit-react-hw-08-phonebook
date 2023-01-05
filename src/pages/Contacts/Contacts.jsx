import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Helmet } from 'react-helmet';
import css from './Contacts.module.css'



export const Contacts = () => {

    return (
      <div>
        <Helmet>
          <title>Your contacts</title>
        </Helmet>
        <h1 className={css.title}>Phonebook</h1>
        <Form/>
        <h2 className={css.contact_title}>Contacts</h2>
        <Filter/>
        <ContactList/>
      </div>
    );
  }