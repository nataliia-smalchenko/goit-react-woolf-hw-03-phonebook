import { Component } from 'react';

import css from './Button.module.css';

class FeedbackStats extends Component {
  render() {
    return (
      <button
        className={css.button}
        type={this.props.type}
        onClick={this.props.handleClick}
      >
        {this.props.text}
      </button>
    );
  }
}

export default FeedbackStats;
