console.log('The bot is starting');

// Import the Twit package
var Twit = require('twit');

// Authenticate with OAuth
var config = require('./config'); // File is hidden for security reasons
var T = new Twit(config);