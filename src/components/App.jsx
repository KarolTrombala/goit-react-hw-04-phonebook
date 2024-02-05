import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import PropTypes from 'prop-types'

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');


  const handleFilterChange = newValue => {
    setFilter(newValue);
  };

  const addContact = (name, number) => {
    setContacts([
      ...contacts,
      {
        id: nanoid(),
        name,
        number,
      },
    ]);
  };

  const NameOnList = (name, number) => {
    const contactNames = contacts.map(contact => contact.name);
    contactNames.includes(name)
      ? alert(`${name} is already in contacts`)
      : addContact(name, number);
  };
  
  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const showFilteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  
  // componentDidMount
  useEffect(() => {
    setContacts(JSON.parse(localStorage.getItem('Contacts')));
  }, []);

  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div
      style={{
        marginTop: 100,
        marginLeft: 100,
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={NameOnList} />

      <h2>Contacts</h2>
      <Filter onChange={handleFilterChange} />
      <ContactList
        contacts={showFilteredContacts()}
        onClick={deleteContact}
      />
    </div>
  );
};

App.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    filter: PropTypes.string,
}
