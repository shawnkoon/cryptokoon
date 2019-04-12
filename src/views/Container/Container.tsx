// Lib
import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

// App
import 'styles/Container.scss';

export class Container extends React.PureComponent {
  render() {
    return (
      <div className="nav-container">
        <Switch>
          <Route path="/hash" render={() => <h1>I am hash</h1>} />
          <Route path="/encryption" render={() => <h1>I am encryption</h1>} />
          <Route path="/decryption" render={() => <h1>I am decrpytion</h1>} />
          <Route render={() => <Redirect to="/hash" />} />
        </Switch>
      </div>
    );
  }
}
