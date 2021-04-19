const path = require('path');
const express = require('express');
const { closeDelimiter } = require('ejs');
const router = express.Router();
//const rootDir = require('../utils/path');

router.get('/laptop', (req, res, next) => {
  // console.log('first.js', firstRoutes);
  res.render('laptop');
});

module.exports = router;
