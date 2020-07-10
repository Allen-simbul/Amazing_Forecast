import React from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { getChosenForecast, getCurrentSearchTerm } from '../Actions';

class Forecast extends React.Component {
  componentDidMount = async () => {
    await this.props.getCurrentSearchTerm();
    const locationID = this.props.current_search_term.location_id;
    await this.props.getChosenForecast(locationID);
  };

  renderMainForecast = () => {
    if (Object.keys(this.props.current_forecast).length !== 0) {
      return (
        <div className="main_forecast_container">
          <div className="main_forecast_left">
            <div className="main_forecast_city_name">
              {this.props.current_forecast.cityName}
            </div>
            <div className="main_forecast_current_time">
              {this.props.current_forecast.currentTime}
            </div>
            <div className="main_forecast_temperature">
              {this.props.current_forecast.main.temp}
            </div>
            <div className="main_forecast_weather_description">
              {this.props.current_forecast.weather.description}
            </div>
            <div className="main_forecast_weather_main">
              {this.props.current_forecast.weather.main}
            </div>
          </div>
          <div className="main_forecast_right">
            <i>Icon</i>
          </div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  };
  render() {
    return (
      <div>
        Forecast
        {/* {console.log(
          this.props.current_forecast === true,
          this.props.current_forecast
        )} */}
        {this.renderMainForecast()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    current_forecast: state.currentForecast,
    current_search_term: state.searchterm,
  };
};

export default connect(mapStateToProps, {
  getChosenForecast,
  getCurrentSearchTerm,
})(Forecast);
