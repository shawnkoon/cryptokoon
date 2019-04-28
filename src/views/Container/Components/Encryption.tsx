// Lib
import * as React from 'react';
import * as crypto from 'crypto';

// App
import 'styles/Encryption.scss';

interface EncryptionState {
  algorithm?: string;
  secretKey: string;
  text?: string;
  encryptedText?: string;
}

// eslint-disable-next-line
interface EncryptionProps {}

export class Encryption extends React.PureComponent<EncryptionProps, EncryptionState> {
  private encrpytions: string[];

  constructor(props: EncryptionProps) {
    super(props);
    this.state = {
      secretKey: this.getRandomHex(32),
    };
    this.encrpytions = crypto.getCiphers();
  }

  private isSubmitDisabled(): boolean {
    const { algorithm, secretKey, text } = this.state;

    return !algorithm || !secretKey || !text;
  }

  private getRandomHex(byteLength: number): string {
    return crypto.randomBytes(byteLength).toString('hex');
  }

  private handleSubmit = (e: any): void => {
    e && e.preventDefault();

    this.setState({ encryptedText: this.encrypt() });
  };

  public encrypt(): string {
    // https://lollyrock.com/posts/nodejs-encryption/
    const { algorithm, secretKey, text } = this.state;
    const cipher = crypto.createCipher(algorithm!, secretKey);
    let crypted = cipher.update(text!, 'utf8', 'hex');
    crypted += cipher.final('hex');

    return crypted;
  }

  render() {
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
          <div className="input-group mb-2">
            <label className="ml-1 d-block" style={{ width: '100%' }} htmlFor="encryptionKey">
              Secret Key
            </label>
            <input
              disabled
              id="encryptionKey"
              type="text"
              className="form-control"
              value={this.state.secretKey}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={() => this.setState({ secretKey: this.getRandomHex(32) })}
              >
                <span className="fas fa-sync-alt" />
              </button>
            </div>
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
        {this.state.encryptedText && (
          <div className="card border-primary mt-5 text-center form">
            <div className="card-body">
              <p className="card-text">{this.state.encryptedText}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
