import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    console.log('App:');
    const newData = calculate(this.state, buttonName);
    this.setState(newData);
  }

  render() {
    const { total, next } = this.state;

    return (
      <>
        <div className="app-panel">
          <h1>React Calculator</h1>
          <Display result={next || total || '0'} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </>
    );
  }
}
