const { DarkSky } = require('../start');

exports.homePage = (req, res) => {
  res.json(DarkSky);
};
