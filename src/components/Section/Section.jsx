import { Component } from 'react';

import css from './Section.module.css';

class Section extends Component {
  render() {
    return (
      <section>
        <h2 className={css.title}>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
