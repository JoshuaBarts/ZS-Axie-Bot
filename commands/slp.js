//import AXIOS
const axios = require('axios');

module.exports = function(msg, args) {

    let url = "https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=php";
            
    axios(url)
        .then(response => {
            var data = response.data
            var slp = JSON.stringify(data['smooth-love-potion'].php);

            console.log(data)
            console.log(slp)
            
            msg.channel.send("<:smoothlovepotion:871984274574823496> SLP VALUE:  ₱***" + slp + "***")
                .then(function(message) {
                    if (slp > 3.50) {
                        message.react("😍")
                    }
                    else {
                        message.react("😭")
                    }
                    
                    
                }).catch(function() {
                    console.log(err)
                })
               
        })
}