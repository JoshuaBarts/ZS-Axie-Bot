//import AXIOS
const axios = require('axios');

module.exports = function(msg, args) {
    let keywords = args;
    let url = "https://api.coingecko.com/api/v3/simple/price?ids=axie-infinity&vs_currencies=php";
    
    if (args.length > 0) {
        keywords = args.join(" ");
    }
    var total = 0;      
    axios(url)
        .then(response => {
            var data = response.data
            var axs = JSON.stringify(data['axie-infinity'].php);
            total = keywords * axs;
            console.log(total)
            console.log(args)
            msg.delete({timeout: '1000'});
            msg.channel.send("<:axs:871984785696886804> AXS CONVERSION:  (RATE: " + axs + ") => ₱***" + total.toFixed(2) + "***")
        })
}