const axios = require('axios');
require('dotenv').config({ path: '../variables.env' });

// const { DarkSky } = require('../start');

exports.homePage = (req, res) => {
  res.send('hello');
};
