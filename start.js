require('dotenv').config({ path: 'variables.env' });
const axios = require('axios');

exports.darksky = axios.get(`https://api.darksky.net/forecast/${process.env.DARKSKY_SECRET_KEY}/42.3601,-71.0589`)
  .then((response) => response)
  .catch((error) => {
    console.log(error);
  });

const app = require('./app');

// NodeJS server
app.set('port', process.env.PORT);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
