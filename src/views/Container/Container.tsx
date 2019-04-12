// Lib
import * as React from 'react';
import { Route } from 'react-router-dom';

// App
import 'styles/Container.scss';

export class Container extends React.PureComponent {
  render() {
    return (
      <div className="nav-container">
        <Route path="/" exact component={() => <h1>I am root</h1>} />
        <Route path="/hash" exact component={() => <h1>I am hash</h1>} />
        <Route path="/encryption" exact component={() => <h1>I am encryption</h1>} />
        <Route path="/decryption" exact component={() => <h1>I am decrpytion</h1>} />
      </div>
    );
  }
}
