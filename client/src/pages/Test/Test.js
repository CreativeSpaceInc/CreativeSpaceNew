import React from 'react';
import TestPage1 from './TestPage1.js'


class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: 'Initial data...'
    }
    this.updateState = this.updateState.bind(this);
    };

  updateState(e) {
    this.setState({data: e.target.value});
    }

  render() {
    return (
      <div>
        <TestPage1 myDataProp = {this.state.data}
        updateStateProp = {this.updateState}></TestPage1>
        <h3>{this.state.data}</h3>
      </div>
    );
  }

}


export default Test;
