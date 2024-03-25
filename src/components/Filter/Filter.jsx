import { Component } from 'react';
import Input from '../Input/Input';

class Filter extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <Input
          type="text"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.props.filter}
          label="Find contacts by name"
          onChange={this.props.onChange}
        />
      </form>
    );
  }
}

export default Filter;
