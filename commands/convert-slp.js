//import AXIOS
const axios = require('axios');

module.exports = function(msg, args) {
    let keywords = args;
    let url = "https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=php";
    
    if (args.length > 0) {
        keywords = args.join(" ");
    }
    var total = 0;      
    axios(url)
        .then(response => {
            var data = response.data
            var slp = JSON.stringify(data['smooth-love-potion'].php);
            total = keywords * slp;
            console.log(total)
            console.log(args)
            msg.delete({timeout: '1000'});
            msg.channel.send("<:smoothlovepotion:871984274574823496> SLP CONVERSION:  (RATE: " + slp + ") => ₱***" + total.toFixed(2) + "***")
        })
}