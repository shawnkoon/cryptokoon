// Lib
import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

// App
import 'styles/Container.scss';
import { Decryption, Encryption, Hash } from './Components';

export class Container extends React.PureComponent {
  render() {
    return (
      <div className="nav-container">
        <Switch>
          <Route path="/hash" component={Hash} />
          <Route path="/encryption" component={Encryption} />
          <Route path="/decryption" component={Decryption} />
          <Route render={() => <Redirect to="/hash" />} />
        </Switch>
      </div>
    );
  }
}
