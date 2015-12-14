var redis = require('redis');

var options = {
    port: process.env.REDIS_PORT || 6379,
    hots: process.env.REDIS_HOST || '127.0.0.1',
    auth_pass: 'paycode2k15'
}

var client = redis.createClient(options);
var redisTTL = 1800;

client.on('connect', function(){
   console.log('Redis connection established');
});

client.on('error', function(err){
    console.log('Redis connection established, '+ err);
});


module.exports.client = client;
module.exports.redisTTL = redisTTL;