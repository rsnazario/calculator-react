import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const prop = this.props;
    prop.clickHandler(buttonName);
  }

  render() {
    return (
      <div className="button-panel">
        <div>
          <Button buttonName="AC" clickHandler={this.handleClick} />
          <Button buttonName="+/-" clickHandler={this.handleClick} />
          <Button buttonName="%" clickHandler={this.handleClick} />
          <Button buttonName="/" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button buttonName="7" clickHandler={this.handleClick} />
          <Button buttonName="8" clickHandler={this.handleClick} />
          <Button buttonName="9" clickHandler={this.handleClick} />
          <Button buttonName="*" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button buttonName="4" clickHandler={this.handleClick} />
          <Button buttonName="5" clickHandler={this.handleClick} />
          <Button buttonName="6" clickHandler={this.handleClick} />
          <Button buttonName="-" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button buttonName="1" clickHandler={this.handleClick} />
          <Button buttonName="2" clickHandler={this.handleClick} />
          <Button buttonName="3" clickHandler={this.handleClick} />
          <Button buttonName="+" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button buttonName="0" clickHandler={this.handleClick} />
          <Button buttonName="." clickHandler={this.handleClick} />
          <Button buttonName="=" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
