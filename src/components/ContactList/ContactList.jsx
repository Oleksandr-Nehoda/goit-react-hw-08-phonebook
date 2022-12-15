import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMyContact, getContacts } from '../../redux/sliceContacts';
import { getFilter } from '../../redux/sliceFilter';



export const ContactList = () => {

  const dispatch = useDispatch();
  // Redux отримуєм з сховища дані
  const contacts = useSelector(getContacts);
  const onFilter = useSelector(getFilter);

  // Ф-ція видалення
  const deleteContact = idContact => {
    dispatch(deleteMyContact(idContact));
  };

// Фільтр контактів
  const filterContacts = () => {
 
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(onFilter.toLowerCase())
    );
  };


  return (
    <div className={css.list_box}>
      <ul>
        {filterContacts().map(({ id, name, number }) => {
          return (
            <li key={id} className={css.item}>
              <p className={css.contact_name}>
                {name} ---------- {number}
              </p>
              <button
                className={css.btn_delete_contact}
                type="button"
                onClick={() => deleteContact(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.protoType = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),

  onDeleteContact: PropTypes.func,
};
