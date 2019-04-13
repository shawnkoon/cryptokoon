// Lib
import * as React from 'react';
import * as crypto from 'crypto';

interface HashMap {
  [hash: string]: string;
}

interface HashState {
  searchTerm: string;
  hashedMap: HashMap | undefined;
}

export class Hash extends React.Component<{}, HashState> {
  // Some reason, getHashes() function returns unsupported algos as well
  private supportedAlgos = ['sha1', 'sha224', 'sha256', 'md5', 'rmd160'];
  private hashes: string[];

  constructor(props: {}) {
    super(props);
    this.hashes = crypto.getHashes().filter(h => this.supportedAlgos.includes(h.toLowerCase()));

    this.state = {
      searchTerm: '',
      hashedMap: undefined,
    };
  }

  public handleSearch = (e: any): void => {
    e.preventDefault();
    let hashedMap = this.state.hashedMap || {};

    this.hashes.forEach(h => {
      hashedMap[h] = this.getHashedValue(h, this.state.searchTerm);
    });

    this.setState({ hashedMap });
  };

  public getHashedValue = (algo: string, text: string): string => {
    return crypto
      .createHash(algo)
      .update(text)
      .digest('hex');
  };

  render() {
    const { searchTerm, hashedMap } = this.state;

    return (
      <>
        <form className="form-inline">
          <label className="sr-only" htmlFor="inlineFormInputGroup">
            Example Text
          </label>
          <div className="input-group mb-2 mr-sm-2 mb-sm-0">
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroup"
              placeholder="Example Text"
              value={searchTerm}
              onChange={e => this.setState({ searchTerm: e.target.value })}
            />
          </div>
          <button
            disabled={!searchTerm}
            type="submit"
            className="btn btn-primary btn-shadow"
            onClick={this.handleSearch}
          >
            <span className="fas fa-poll-h mr-2" />
            Hash
          </button>
        </form>
        {hashedMap && (
          <table className="table table-hover table-striped">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Hash Algorithm</th>
                <th>Hashed Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(hashedMap).map((algo, i) => (
                <tr key={`${searchTerm}-${i}`}>
                  <th scope="row">{i}</th>
                  <td>{algo}</td>
                  <td>{hashedMap[algo]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </>
    );
  }
}
