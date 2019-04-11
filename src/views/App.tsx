// Lib
import React, { Component } from 'react';

// App
import { Header } from './Header';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header textDelay={200} />
      </div>
    );
  }
}

export default App;
