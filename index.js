require("dotenv").config();

// const envSetup = require("dotenv");
// envSetup.config();

const server = require("./api/server.js");

server.listen(process.env.PORT, () => {
  console.log(`\n*** Server Running on port ${process.env.PORT} ***\n`);
});
