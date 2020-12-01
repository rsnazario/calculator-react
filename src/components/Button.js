import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    const { buttonName, clicker } = this.props;
    console.log(buttonName);
    console.log(clicker);
    this.handleClick = btnName => clicker(btnName);
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
  clicker: PropTypes.func.isRequired,
};

Button.defaultProps = {
  buttonName: '+',
};
