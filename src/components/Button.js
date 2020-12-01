import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const prop = this.props;
    console.log(prop);
    console.log('clicked!');
    prop.clickHandler('5');
  }

  render() {
    const { buttonName } = this.props;
    return (
      <button type="submit" onClick={this.handleClick} value={buttonName}>
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
