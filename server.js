const express = require("express");
const morgan = require("morgan");
const PORT = process.env.PORT || 3001;
const app = express();
// This is just for diagnostics on requests
app.use(morgan("dev"));
// imports routes for the api
const apiRoutes = require("./routes/apiRoutes");
// imports routes for html
const htmlRoutes = require("./routes/htmlRoutes");

// converts post data to key values to be used in req.body
app.use(express.urlencoded({ extended: true }));
// parses post data into the req.body object
app.use(express.json());
// uses static files in public
app.use(express.static("public"));
// refers fetch requests to the apiRoutes
app.use("/api", apiRoutes);
// refers to static files through htmlRoutes
app.use("/", htmlRoutes);
// sets up server on the PORT
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
