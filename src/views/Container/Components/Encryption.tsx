// Lib
import * as React from 'react';
import * as crypto from 'crypto';

// App
import 'styles/Encryption.scss';

interface EncryptionState {
  algorithm?: string;
  secretKey?: string;
  initialVector?: string;
  text?: string;
}

// eslint-disable-next-line
interface EncryptionProps {}

export class Encryption extends React.PureComponent<EncryptionProps, EncryptionState> {
  private encrpytions: string[];

  constructor(props: EncryptionProps) {
    super(props);
    this.state = {};
    this.encrpytions = crypto.getCiphers();
  }

  private isSubmitDisabled(): boolean {
    const { algorithm, secretKey, initialVector, text } = this.state;

    return !algorithm || !secretKey || !initialVector || !text;
  }

  private handleSubmit = (e: any): void => {
    e && e.preventDefault();

    console.log('this --', this);
  };

  render() {
    // http://vancelucas.com/blog/stronger-encryption-and-decryption-in-node-js/ <- check this for algorithms

    return (
      <div className="encryption-container">
        <form className="form">
          <div className="form-group mt-3">
            <label className="ml-1" htmlFor="algorithmDropDown">
              Algorithms
            </label>
            <select
              className="form-control"
              id="algorithmDropDown"
              value={this.state.algorithm || 'default'}
              onChange={e => this.setState({ algorithm: e.target.value })}
            >
              <option disabled value="default">
                Choose an Encryption Algorithm...
              </option>
              {this.encrpytions.map((algo: string) => (
                <option key={algo} value={algo}>
                  {algo}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="ml-1" htmlFor="encryptionKey">
              Secret Key
            </label>
            <input
              id="encryptionKey"
              type="password"
              className="form-control"
              placeholder="Enter a secret encryption key."
              onChange={e => this.setState({ secretKey: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label className="ml-1" htmlFor="initialVector">
              Initial Vector
            </label>
            <input
              id="initialVector"
              type="password"
              className="form-control"
              placeholder="Enter an initial vector value."
              onChange={e => this.setState({ initialVector: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label className="ml-1" htmlFor="encryptionText">
              Text
            </label>
            <input
              id="encryptionText"
              type="text"
              className="form-control"
              placeholder="Enter text to be encrypted."
              onChange={e => this.setState({ text: e.target.value })}
            />
          </div>
          <button
            disabled={this.isSubmitDisabled()}
            type="submit"
            className="btn btn-block btn-outline-primary mt-5"
            onClick={this.handleSubmit}
          >
            Encrypt
          </button>
        </form>
      </div>
    );
  }
}
