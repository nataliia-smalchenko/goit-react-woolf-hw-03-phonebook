import { Component } from 'react';
import css from './Input.module.css';

class Input extends Component {
  render() {
    return (
      <>
        <label className={css.label} htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <input
          className={css.input}
          type={this.props.type}
          id={this.props.id}
          pattern={this.props.pattern}
          title={this.props.title}
          value={this.props.value}
          onChange={this.props.onChange}
          required
        />
      </>
    );
  }
}

export default Input;
