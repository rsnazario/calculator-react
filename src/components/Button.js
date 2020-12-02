import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(target) {
    const prop = this.props;
    prop.clickHandler(target);
  }

  render() {
    const { buttonName } = this.props;
    return (
      <button type="submit" onClick={event => this.handleClick(event.target.value)} value={buttonName}>
        {buttonName}
      </button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  buttonName: '+',
};
