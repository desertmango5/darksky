const axios = require('axios');

const [lat, long] = [24.207500, 55.744720];
const darkskyAPI = `https://api.darksky.net/forecast/${process.env.DARKSKY_SECRET_KEY}/${lat},${long}`;

const DarkSky = () => axios.get(darkskyAPI)
  .then(response => response)
  .catch((error) => {
    console.log(error);
  });


exports.homePage = async (req, res) => {
  const response = await DarkSky();
  res.render('index', {response, title: 'Home' });
};

exports.api = async (req, res) => {
  const lat = req.params.lat;
  const long = req.params.long;
  console.log(lat, long);

  res.send('Received');
};
