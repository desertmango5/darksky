require('dotenv').config({ path: 'variables.env' });

const app = require('./app');

// NodeJS server
app.set('port', process.env.PORT);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
