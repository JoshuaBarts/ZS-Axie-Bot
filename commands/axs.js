//import AXIOS
const axios = require('axios');

module.exports = function(msg, args) {

    let url = "https://api.coingecko.com/api/v3/simple/price?ids=axie-infinity&vs_currencies=php";
            
    axios(url)
        .then(response => {
            var data = response.data
            var axs = JSON.stringify(data['axie-infinity'].php);

            console.log(data)
            console.log(axs)
            msg.channel.send("<:axs:871984785696886804> AXS VALUE:  ₱" + axs + "")
        })
}