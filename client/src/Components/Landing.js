import React from 'react';
import { connect } from 'react-redux';
import { getLocations, searchTerm } from '../Actions';
import SearchBar from './SearchBar';

class Landing extends React.Component {
  handleInput = (searchterm) => {
    this.props.searchTerm(searchterm.location);
  };
  render() {
    return (
      <div>
        Landing
        <SearchBar onSubmit={this.handleInput} />
      </div>
    );
  }
}

export default connect(null, {
  getLocations,
  searchTerm,
})(Landing);
