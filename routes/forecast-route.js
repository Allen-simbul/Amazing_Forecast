const express = require('express');
const router = new express();
const openweather = require('../services/openweather');
require('../db/mongoose');
const Location = require('../models/Location');
const Code = require('../models/Code');

router.get('/api/forecast/:city', async (req, res) => {
  const response = await openweather(req.params.city);
  // console.log(response.cod === 404);
  res.send(response);
});

module.exports = router;
