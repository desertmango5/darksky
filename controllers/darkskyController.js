const axios = require('axios');

const [lat, lon] = [24.150, 55.702];
const darkskyAPI = `https://api.darksky.net/forecast/${process.env.DARKSKY_SECRET_KEY}/${lat},${lon}`;

const DarkSky = () => axios.get(darkskyAPI)
  .then(response => response)
  .catch((error) => {
    console.log(error);
  });

exports.homePage = async (req, res) => {
  const response = await DarkSky();
  res.send(response.data);
};
