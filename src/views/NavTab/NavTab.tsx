// Lib
import * as React from 'react';
import { NavLink } from 'react-router-dom';

// App
import 'styles/NavTab.scss';

export class NavTab extends React.PureComponent {
  render() {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink replace className="nav-link" to="/hash" activeClassName="active">
            Hash
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink replace className="nav-link" to="/encryption" activeClassName="active">
            Encryption
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink replace className="nav-link" to="/decryption" activeClassName="active">
            Decryption
          </NavLink>
        </li>
      </ul>
    );
  }
}
