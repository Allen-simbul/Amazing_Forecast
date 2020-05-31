const express = require('express');
const router = new express();
const openweather = require('../services/openweather');

router.get('/api/forecast/:city', async (req, res) => {
  const response = await openweather(req.params.city);
  console.log(response);
  res.send(response.data);
});

module.exports = router;
