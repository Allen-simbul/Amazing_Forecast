import React from 'react';
import { connect } from 'react-redux';
import { getLocations } from '../Actions';

class SearchResults extends React.Component {
  componentDidMount = () => {
    console.log(this.props.match.params.location);
    this.props.getLocations('Dublin');
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
  };
};

export default connect(mapStateToProps, {
  getLocations,
})(SearchResults);
