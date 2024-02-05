import css from './ContactList.module.css'
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onClick }) => {
  const handleDelete = (id) => onClick(id.target.value)

  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css.listEl}>
            {contact.name}: {contact.number}
            <button
              type="submit"
              value={contact.id}
              onClick={handleDelete}
              className={css.delButton}
            >
              Delete
            </button>
          </li>
        )
      })}
    </ul>
  )
};

ContactList.propTypes = {
  onClick: PropTypes.func.isRequired,
};
