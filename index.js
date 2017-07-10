const Twitter = require('twitter');
const credentials = require('./credentials.json');
const client = new Twitter(credentials);
client.post('statuses/update', {status: 'API testing'}, function(error, tweet, response) {
  if (!error) {
    console.log(tweet);
  }
});