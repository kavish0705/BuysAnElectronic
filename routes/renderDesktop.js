const path = require('path');
const express = require('express');
const { closeDelimiter } = require('ejs');
const router = express.Router();
//const rootDir = require('../utils/path');

router.get('/desktop', (req, res, next) => {
  // console.log('first.js', firstRoutes);
  res.render('desktop');
});

module.exports = router;
