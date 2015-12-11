var redis = require('redis');

var options = {
    port: process.env.REDIS_PORT || 6379,
    hots: process.env.REDIS_HOST || '127.0.0.1'
    //, auth: 'mypassword'
}

var client = redis.createClient(options);
var redisTTL = 1800;

module.exports.client = client;
module.exports.redisTTL = redisTTL;