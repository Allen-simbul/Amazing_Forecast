const express = require('express');
const router = new express();
require('../db/mongoose');
const Code = require('../models/Code');
const Location = require('../models/Location');
const Term = require('../models/SearchTerm');
const { json } = require('express');

router.post('/api/search_result/', async (req, res) => {
  const countDocs = await Term.countDocuments({}, (err, count) => {
    return count;
  });
  if (!(countDocs >= 1)) {
    const term = new Term({ searchTerm: '', location: '', location_id: 0 });
    await term.save();
  }
  const current_term = await Term.find({});
  res.send(current_term);
});

router.patch('/api/search_result/update/:searchTerm', async (req, res) => {
  const updated_searchterm = await Term.findOneAndUpdate(
    {},
    { currentSearchTerm: true, searchTerm: req.params.searchTerm }
  );
  res.send(updated_searchterm);
});

router.get('/api/search_result/:location', async (req, res) => {
  const matched_locations = await Location.find({ name: 'Dublin' });
  res.send(matched_locations);
});

router.get('/api/search_result/current_search_term', async (req, res) => {
  const current_search_term = await Term.findOne(
    { currentSearchTerm: true },
    (err, term) => {
      return term;
    }
  );
  res.send(current_search_term);
});

module.exports = router;
