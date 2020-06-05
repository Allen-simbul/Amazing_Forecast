import React from 'react';
import { connect } from 'react-redux';
import { getForecast } from '../Actions';
import SearchBar from './SearchBar';

class Landing extends React.Component {
  handleInput = (searchterm) => {
    // console.log(searchterm);
    this.props.getForecast(searchterm.location);
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
  getForecast,
})(Landing);
