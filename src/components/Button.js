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
    const { buttonName, buttonColor, wider } = this.props;
    const styles = {
      width: null,
      backgroundColor: buttonColor,
    };

    if (wider) {
      styles.width = '50%';
    } else {
      styles.width = '25%';
    }
    let buttonClass = '';
    buttonClass = buttonName === '0' ? 'button-0' : 'button';
    return (
      <button className={buttonClass} type="submit" onClick={event => this.handleClick(event.target.value)} style={styles} value={buttonName}>
        {buttonName}
      </button>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string,
  buttonColor: PropTypes.string,
  wider: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  buttonName: '+',
  buttonColor: 'orange',
  wider: false,
};
