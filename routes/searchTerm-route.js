const express = require('express');
const router = new express();
require('../db/mongoose');
const Code = require('../models/Code');
const Location = require('../models/Location');
const Term = require('../models/SearchTerm');
const { json } = require('express');

const editSearchTerm = (searchTerm) => {
  const edittedTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
  return edittedTerm;
};

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
  const searchTerm = editSearchTerm(req.params.searchTerm);
  const updated_searchterm = await Term.findOneAndUpdate(
    {},
    {
      currentSearchTerm: true,
      searchTerm: searchTerm,
    },
    { new: true }
  );
  res.send(updated_searchterm);
});

router.get('/api/search_result/:location', async (req, res) => {
  const location = editSearchTerm(req.params.location);
  const matched_locations = await Location.find({ name: location });
  res.send(matched_locations);
});

router.get('/api/search_result/current/search_term/', async (req, res) => {
  const current_search_term = await Term.findOne(
    { currentSearchTerm: true },
    (err, term) => {
      return term;
    }
  );
  res.send(current_search_term);
});

module.exports = router;
