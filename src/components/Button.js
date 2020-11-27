import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { buttonName } = this.props;
    return (
      <button>
        {buttonName}
      </button>
    )
  }
}

Button.propTypes = {
  buttonName: PropTypes.string,
};

Button.defaultProps = {
  buttonName: '+',
};
