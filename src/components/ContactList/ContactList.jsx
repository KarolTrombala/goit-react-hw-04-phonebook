import css from './ContactList.module.css';
import PropTypes from 'prop-types';


export const ContactList = ({ deleteContact, showFilteredContacts }) => {
  return (
    <ul>
      {showFilteredContacts.map(n => (
        <li key={n.id} className={css.listEl}>
          {n.name}: {n.number}
          <button
            type="button"
            onClick={() => deleteContact(n.id)}
            className={css.delButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  showFilteredContacts: PropTypes.array,

  deleteContact: PropTypes.func,
};
