console.log('The bot is starting');

// Import the Twit package
var Twit = require('twit');

// Authenticate with OAuth
var config = require('./config'); // File is hidden for security reasons
var T = new Twit(config);

postTweet();

// Schedule tweets to post once per day
var numMillisecondsPerDay = 24 * 60 * 60 * 1000;
var twenty = 1000 * 20;
setInterval(postTweet, twenty);
postTweet();

// Post to Twitter
function postTweet() {
	var r = Math.floor(Math.random() * 100);
	
	var tweet = {
		status: 'Hello world! ' + r
	};

	T.post('statuses/update', tweet, tweeted);

	function tweeted (err, data, response) {
		if (err) {
			console.log("Error");
		} else {
			// Print status & info of the new tweet
			console.log(data);
		}
	}
};

