import React from 'react';
import PropTypes from 'prop-types';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { result } = this.props;
    console.log(`Display result: ${result}`);
    return (
      <div className="flex-bottom button-row display-style">
        <h1>
          {result}
        </h1>
      </div>
    );
  }
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
