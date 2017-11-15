const OAuth = require('oauth')

const oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'NmC8ThnKC5vz641nnqEM371Q6',
      '8Rtr3htMNifyMCnrY5jqoIvkTjCG9zVIncprWczr7wct44Tt54',
      '1.0A',
      null,
      'HMAC-SHA1'
    );


module.exports = oauth
