const express = require('express');
const router = new express();
const openweather = require('../services/openweather');
require('../db/mongoose');
const Location = require('../models/Location');
const Code = require('../models/Code');

const getWeatherData = async (city) => {
  const weatherData = {};
  const response = await openweather(city);
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

router.get('/api/forecast/:city', async (req, res) => {
  const response = await getWeatherData(req.params.city);
  console.log(response);
  res.send(response);
});

module.exports = router;
