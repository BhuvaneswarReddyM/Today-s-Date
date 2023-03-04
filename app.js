const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let newDate = new Date();
  response.send(
    `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`
  );
});

module.exports = app;
// const express = require("express");
// const app = express();
// app.get("/", (request, response) => {
//   const dateTime = new Date();
//   response.send(
//     `${dateTime.getDate()}-${dateTime.getMonth() + 1}-${dateTime.getFullYear()}`
//   );
// });

// module.exports = app;
