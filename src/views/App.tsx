// Lib
import * as React from 'react';

// App
import 'styles/App.scss';
import { Header } from './Header';
import { NavTab } from './NavTab';
import { Container } from './Container';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <a href="https://github.com/shawnkoon/cryptokoon">
          <img
            className="fork-logo"
            src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
            alt="Fork me on GitHub"
          />
        </a>
        <Header textDelay={200} />
        <NavTab />
        <Container />
      </div>
    );
  }
}

export default App;
