import React, { Component } from 'react';
import { Calculator } from './components/Calculator';

class App extends Component {
  btnCLass = 'hello from App'

  render() {
    return (
      <div className="container mt-5">
        <Calculator />
      </div>
    );
  }
}

export default App;