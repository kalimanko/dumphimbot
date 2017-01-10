console.log('The bot is starting');

// Import the Twit package
var Twit = require('twit');

// Authenticate with OAuth
var config = require('./config'); // File is hidden for security reasons
var T = new Twit(config);

// Support for posting to Twitter
var tweet = { 
	status: 'Hello world!' 
};

T.post('statuses/update', tweet, tweeted);

function tweeted (err, data, response) {
	if (err) {
		console.log("Error");
	} else {
		// Print status & info of the newly posted tweet
		console.log(data);
	}
};