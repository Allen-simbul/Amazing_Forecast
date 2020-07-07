import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { DATE_FORMAT, TIME_FORMAT } from './Moment_Formats/Date_Time_Format';

class ForecastPreview extends React.Component {
  renderForecast = () => {
    if (this.props.forecasts.length !== 0) {
      return this.props.locations.map((location, index) => {
        const forecast = this.props.forecasts[index];
        const DateTime = moment.utc(
          (forecast.currentTime + forecast.timezone) * 1000
        );
        return (
          <div key={location.id}>
            <div>
              <span>{location.name} </span>
              <span>{location.country}</span>
            </div>
            <div>
              <span>{forecast.main.temp} C</span>
              <span> | {forecast.weather.description}</span>
              <span> | {forecast.weather.main}</span>
              <span> | {DateTime.format(DATE_FORMAT)}</span>
              <span> | {DateTime.format(TIME_FORMAT)}</span>
            </div>
            <br></br>
          </div>
        );
      });
    } else {
      return <div>Loading...</div>;
    }
  };

  render() {
    return <div>{this.renderForecast()}</div>;
  }
}

export default ForecastPreview;
