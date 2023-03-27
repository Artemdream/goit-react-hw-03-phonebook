import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import './App.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    parsedContacts && this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addNewContact = (newContact, { action }) => {
    const { contacts } = this.state;

    const duplicateContact = contacts.map(el => el.name.toLocaleLowerCase());

    return duplicateContact.includes(newContact.name.toLocaleLowerCase())
      ? alert(`${newContact.name} is already in contacts.`)
      : this.setState(prevState => {
          action.resetForm();
          return {
            contacts: [newContact, ...prevState.contacts],
          };
        });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;

    const normilizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normilizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContact();

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <Filter value={filter} onChange={this.filterContacts} />
        <h2>Contacts</h2>
        <ContactList
          contacts={visibleContact}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
