const { default: axios } = require("axios");

module.exports = function(msg, args) {
    let keywords = args;
    if (args.length > 0) {
        keywords = args.join(" ");
    }

    let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.GIF_TOKEN}&contentfilter=low`;
    axios(url)
        .then(response => {
            var response = response.data
            const index = Math.floor(Math.random() * response.results.length)
            //console.log(data)
            msg.channel.send(response.results[index].url)
        })
}