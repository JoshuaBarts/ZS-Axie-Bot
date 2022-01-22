const { default: axios } = require("axios");
const { cheerio } = require("cheerio");

module.exports =  function(msg, args) {
    

    let max = args;
    if (args.length > 0) {
        max = args.join(" ");
    }
    
    let number = Math.floor(Math.random() * Math.pow(10, 5));
    
    let nuke = `https://nhentai.net/g/` + number;
    msg.delete({timeout: '1000'});
    
    msg.author.send(nuke)
    
    
    
}