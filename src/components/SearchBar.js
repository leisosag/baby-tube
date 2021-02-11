import React from 'react';
import logo from '../logo.png';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <form className="search-bar p-3 mb-3" onSubmit={this.onFormSubmit}>
        <div className="form-row justify-content-center">
          <div className="col-4">
            <img
              src={logo}
              alt="icono"
              width="40"
              height="40"
              className="mr-2"
            />
            Baby Tube
          </div>
          <div className="col-5">
            <input
              type="text"
              id="input"
              className="form-control"
              placeholder="Search a video"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-danger pb-2 pl-4 pr-4">
              Search
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
