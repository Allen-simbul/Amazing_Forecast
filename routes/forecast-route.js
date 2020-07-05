const express = require('express');
const router = new express();
const openweather = require('../services/openweather');
require('../db/mongoose');
const Location = require('../models/Location');
const Code = require('../models/Code');
const Term = require('../models/SearchTerm');

const getWeatherData = async (location_id) => {
  const weatherData = {};
  const response = await openweather(location_id);
  weatherData.cityName = response.name;
  weatherData.cod = response.cod;
  weatherData.coord = response.coord;
  weatherData.clouds = response.clouds;
  weatherData.currentTime = response.dt;
  weatherData.locationID = response.id;
  weatherData.main = response.main;
  weatherData.rain = response.rain;
  weatherData.sun = {
    sunriseTime: response.sys.sunrise,
    sunsetTime: response.sys.sunset,
  };
  weatherData.weather = {
    description: response.weather[0].description,
    main: response.weather[0].main,
  };
  weatherData.wind = response.wind;
  return weatherData;
};

router.get('/api/forecast/:location_id', async (req, res) => {
  const response = await getWeatherData(req.params.location_id);
  console.log(response);
  res.send(response);
});

router.get('/api/forecast/matched_locations/:locations', async (req, res) => {
  const locations = JSON.parse(req.params.locations);
  const response = await Promise.all(
    locations.map(async (location) => {
      const response = await getWeatherData(location.id);
      return response;
    })
  );
  res.send(response);
});

module.exports = router;
