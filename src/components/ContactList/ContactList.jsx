import { Component } from 'react';
import Button from '../Button/Button';
import css from './ContsctList.module.css';

class ContactList extends Component {
  render() {
    return (
      <ul className={css.list}>
        {this.props.list.map(item => {
          return (
            <li className={css.item} key={item.id}>
              <span className={css['item-text']}>
                {item.name}: {item.number}
              </span>
              <Button
                type="button"
                text="Delete"
                handleClick={() => this.props.onClick(item.id)}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
