import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const contactNames = contacts.map(contact => {
      return contact.name;
    });

    if (contactNames.includes(name)) {
      alert(`${name} is already in contacts`)
      return;
    }
    

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem('state')));
  };

  componentDidUpdate(prevState) {
    if (JSON.stringify(this.state.contacts) !== JSON.stringify(prevState.contacts)) 
    {
            localStorage.setItem('state', JSON.stringify(this.state))
        }
  };

  showFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(con =>
      con.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = id => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter(contact => contact.id !== id),
    });
  };

  handleFilterChange = newValue => {
    this.setState({
      filter: newValue,
    });
  };

  render() {
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
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter onChange={this.handleFilterChange} />
        <ContactList
          contacts={this.showFilteredContacts()}
          onClick={this.deleteContact}
        />
      </div>
    );
  }
}
