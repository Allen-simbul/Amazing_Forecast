import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import queryString from 'query-string';
import {
  getLocations,
  getForecasts,
  getCurrentSearchTerm,
  searchTerm,
} from '../Actions';

class SearchResults extends React.Component {
  componentDidMount = async () => {
    await this.props.getCurrentSearchTerm();
    let searchTerm = this.props.current_search_term.searchTerm;
    const changedSearchTerm = queryString.parse(this.props.location.search)
      .location;
    this.checkSearchTerm(searchTerm, changedSearchTerm);
  };

  checkSearchTerm = (currentSearchTerm, changedSearchTerm) => {
    if (currentSearchTerm === changedSearchTerm) {
      this.getForecastLocations(currentSearchTerm);
    } else {
      this.getForecastLocations(changedSearchTerm);
      this.props.searchTerm(changedSearchTerm);
    }
  };

  getForecastLocations = (searchTerm) => {
    this.props.getLocations(searchTerm);
  };

  renderMatchedLocations = () => {
    return this.props.locations.map((location) => {
      return (
        <div key={location.id}>
          <div>
            <span>{location.name} </span>
            <span>{location.country}</span>
          </div>
          <br></br>
          <div></div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        {/* <div>{console.log(this.props.match.params.location)}</div> */}
        {this.renderMatchedLocations()}
        SearchResults
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.matchedLocations,
    current_search_term: state.searchterm,
  };
};

export default connect(mapStateToProps, {
  getLocations,
  getForecasts,
  getCurrentSearchTerm,
  searchTerm,
})(SearchResults);
