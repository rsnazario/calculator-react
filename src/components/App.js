import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <>
        <div className="app-panel">
          <h1>Hello from App</h1>
          <Display />
          <ButtonPanel />
        </div>
      </>
    );
  }
}
