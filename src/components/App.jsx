import { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData) {
      this.setState({ contacts: JSON.parse(localData) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
