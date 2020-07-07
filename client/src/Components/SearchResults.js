import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import ForecastPreview from './ForecastPreview';
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

  getForecastLocations = async (searchTerm) => {
    await this.props.getLocations(searchTerm);
    await this.props.getForecasts(this.props.locations);
  };

  render = () => {
    return (
      <div>
        <ForecastPreview
          locations={this.props.locations}
          forecasts={this.props.forecasts}
        />
        SearchResults
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    locations: state.matchedLocations,
    forecasts: state.locationsForecast,
    current_search_term: state.searchterm,
  };
};

export default connect(mapStateToProps, {
  getLocations,
  getForecasts,
  getCurrentSearchTerm,
  searchTerm,
})(SearchResults);
