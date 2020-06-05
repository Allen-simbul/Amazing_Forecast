const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const showWeather = async (city) => {
  try {
    console.log('openweather check ', city);
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPEN_WEATHER_KEY}`
    );
    // console.log(response);
    return response.data;
  } catch (e) {
    console.log('catch error', e.response.data);
    return e.response.data;
  }
};

module.exports = showWeather;
