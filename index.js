require("dotenv").config();

// const envSetup = require("dotenv");
// envSetup.config();

const server = require("./api/server.js");

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`\n*** Server Running on port ${port} ***\n`);
});
