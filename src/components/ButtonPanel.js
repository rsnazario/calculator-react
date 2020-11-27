import React from 'react';
import Button from './Button';

export default class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="button-panel">
        <div>
          <Button buttonName="AC" />
          <Button buttonName="+/-" />
          <Button buttonName="%" />
          <Button buttonName="/" />
        </div>
        <div>
          <Button buttonName="7" />
          <Button buttonName="8" />
          <Button buttonName="9" />
          <Button buttonName="*" />
        </div>
        <div>
          <Button buttonName="4" />
          <Button buttonName="5" />
          <Button buttonName="6" />
          <Button buttonName="-" />
        </div>
        <div>
          <Button buttonName="1" />
          <Button buttonName="2" />
          <Button buttonName="3" />
          <Button buttonName="+" />
        </div>
        <div>
          <Button buttonName="0" />
          <Button buttonName="." />
          <Button buttonName="=" />
        </div>
      </div>
    );
  }
}
