import React from 'react';
import { connect } from 'react-redux';

class Forecast extends React.Component {
  renderMainForecast = () => {
    return (
      <div className="main_forecast_container">
        <div className="main_forecast_left">
          <div className="main_forecast_city_name">
            {this.props.currentForecast.cityName}
          </div>
          <div className="main_forecast_current_time">
            {this.props.currentForecast.currentTime}
          </div>
          <div className="main_forecast_temperature">
            {this.props.currentForecast.main.temp}
          </div>
          <div className="main_forecast_weather_description">
            {this.props.currentForecast.weather.description}
          </div>
          <div className="main_forecast_weather_main">
            {this.props.currentForecast.weather.main}
          </div>
        </div>

        <div className="main_forecast_right">
          <i>Icon</i>
        </div>
      </div>
    );
  };
  render() {
    return (
      <div>
        Forecast
        {this.renderMainForecast()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentForecast: state.currentForecast,
  };
};

export default connect(mapStateToProps)(Forecast);
