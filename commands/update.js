//const axios = require('axios');

module.exports = function(msg, args) {
    msg.delete({timeout: '1000'});
    msg.channel.send("Added   /nuke   ( ͡° ͜ʖ ͡°)👍");
}