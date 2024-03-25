import { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const contactName = this.state.name;
    if (this.props.isNameExist(contactName)) {
      alert(`${contactName} is already in contacts`);
      return;
    }
    this.props.onSubmit({ name: contactName, number: this.state.number });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.state.name}
          label="Name"
          onChange={this.handleChange}
        />
        <Input
          type="tel"
          id="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={this.state.number}
          label="Number"
          onChange={this.handleChange}
        />
        <Button type="submit" onClick={() => {}} text="add contact" />
      </form>
    );
  }
}

export default ContactForm;
