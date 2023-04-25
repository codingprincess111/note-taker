// Import Express.js
const express = require('express');
const html_routes = require('./routes/html-routes')
const api_routes = require('./routes/api-routes')
// Initialize an instance of Express.js
const app = express();
// Set the port of the application
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// Add routes, both API and view
app.use(html_routes);
app.use(api_routes);
// Send every other request to the React app
app.use(express.static('client'));

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});