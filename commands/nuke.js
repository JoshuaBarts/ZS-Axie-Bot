const { default: axios } = require("axios");
const { cheerio } = require("cheerio");

module.exports = function(msg, args) {
    
    let max = args;
    if (args.length > 0) {
        max = args.join(" ");
    }
    //parseInt(max);
    let number = Math.floor(Math.random() * Math.pow(10, 5));
    
    //while (number > max || number < 10000) {
    //    number = Math.floor(Math.random() * Math.pow(10, 5));
    //}
    //console.log(number)
    //console.log(max)
    let nuke = `https://nhentai.net/g/` + number;
    msg.delete({timeout: '1000'});
    msg.channel.send(nuke);   
    
}