import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={css.list_box}>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={css.item}>
              <p className={css.contact_name}>
                {name} ---------- {number}
              </p>
              <button
                className={css.btn_delete_contact}
                type="button"
                onClick={() => onDeleteContact(id)}
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
