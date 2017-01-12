# Giph-Bot
A small project to try out a Twitter bot with Giphy integration. It uploads GIFs according to a randomly selected Word of the Day, every day!
 * Host: api.giphy.com
 * Public beta key: dc6zaTOxFJmzC
 * See Giph-Bot in action: [Click here](https://twitter.com/Giph_Bot)!

# How it works:
Within a Node.js script, a "word of the day" is randomly selected from a pre-generated array of 3,000+ common words. This word forms the basis for a search query (e.g. "duck" or "zombie") which gets fed to the Giphy API. A gif URL is extracted from the resulting JSON object provided by the API before being uploaded as a media element to be displayed in a tweet. Eventually, this script will be hosted on an independent server in order to continuously post to Twitter once per day.

The Twitter API requires OAuth, which is handled by a server running the ./node/server.js script. The Node package manager (npm) creates a JSON file called package.json (located within the `node` directory) and contains the metadata for this project, including its dependencies. Specifically, functionality for the Twitter API client is provided by [Twit](https://github.com/ttezel/twit), an open-source Node.js package.

# How to contribute:
 * Download Node.js [here](https://nodejs.org/en/) (used for authentication of the Twitter handle on the server)
 * Clone this repo
 * Provide your own config.js file, which contains secret keys necessary to authenticate your own Twitter account (you can get started at [apps.twitter.com](https://apps.twitter.com/))
 * Think of a cool idea and get coding!

# Additional references & documentation
* Giphy API: https://github.com/Giphy/GiphyAPI
* Twit package for Node.js: https://www.npmjs.com/package/twit
