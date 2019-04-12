// Lib
import * as React from 'react';

// App
import 'styles/NavTab.scss';

export class NavTab extends React.PureComponent {
  render() {
    return (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="#!">
            Hash
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">
            Encryption
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#!">
            Decryption
          </a>
        </li>
      </ul>
    );
  }
}
