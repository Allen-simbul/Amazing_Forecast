const express = require('express');
const forecastroute = require('./routes/forecast-route');
const searchresultroute = require('./routes/searchTerm-route');

const app = express();
app.use(express.json());
app.use(forecastroute);
app.use(searchresultroute);

console.log('Server running on port:5000');
app.listen(5000);
