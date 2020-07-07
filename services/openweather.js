const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const showWeather = async (location_id) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?id=${location_id}&units=metric&appid=${process.env.OPEN_WEATHER_KEY}`
    );
    return response.data;
  } catch (e) {
    console.log('catch error', e.response.data);
    return e.response.data;
  }
};

module.exports = showWeather;
