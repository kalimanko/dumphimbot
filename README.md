# Giph-Bot
A small project to try out a Twitter bot with Giphy integration.
 * Host: api.giphy.com
 * Public beta key: dc6zaTOxFJmzC

# How it works:
Currently, this WIP project forms a path given a search query (e.g. "funny cat") and extracts a gif URL from the resulting JSON object provided by the Giphy API. This gif is displayed in a webpage and will eventually be integrated with an autonomous script that posts to Twitter periodically.

The Twitter API requires OAuth, which is handled by a server running our Node.js program. The Node package manager (npm) creates a JSON file called package.json (located within the `node` directory) and contains the metadata for this project, including its dependencies. Specifically, functionality for the Twitter API client is provided by [Twit](https://github.com/ttezel/twit), an open-source Node.js package.

# How to contribute:
 * Download p5.js [here](https://p5js.org/download/) (used for talking to the Giphy API)
 * Download Node.js [here](https://nodejs.org/en/) (used for authentication of the Twitter handle on the server)

# Additional references & documentation
* Giphy API: https://github.com/Giphy/GiphyAPI
* Twit package for Node.js: https://www.npmjs.com/package/twit
