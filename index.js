require('dotenv').config(); //reads .env and merges it into process.env
// const envReader = require('dotenv');
// envReader.config(); //reads .env and merges it into process.env

const server = require('./api/server.js');

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
