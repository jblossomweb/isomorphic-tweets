var fs = require('fs')
var env = require('node-env-file')

if (fs.existsSync('.env')) {
  env('.env')
}

module.exports = {
  mongo: {
    connection: process.env.MONGO_CONNECTION || 'mongodb://localhost/react-tweets'
  },
  twitter: {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  }
}