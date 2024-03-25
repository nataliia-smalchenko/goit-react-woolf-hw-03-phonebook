import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmitContactForm = ({ name, number }) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        { id: nanoid(), name: name, number: number },
      ],
    });
  };

  isNameExist = name => {
    return this.state.contacts.find(contact => contact.name === name);
  };

  handleFilter = evt => {
    this.setState({ filter: evt.target.value });
  };

  filteredContacts() {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
  }

  removeContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          padding: 40,
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Phonebook">
          <ContactForm
            onSubmit={this.handleSubmitContactForm}
            isNameExist={this.isNameExist}
          />
        </Section>
        <Section title="Contacts">
          <Filter filter={this.state.filter} onChange={this.handleFilter} />
          <ContactList
            list={this.filteredContacts()}
            onClick={this.removeContact}
          />
        </Section>
      </div>
    );
  }
}

export { App };
