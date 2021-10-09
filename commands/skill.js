//import AXIOS
const axios = require('axios');

module.exports = function(msg, args) {

    let url = "https://api.coingecko.com/api/v3/simple/price?ids=cryptoblades&vs_currencies=php";
            
    axios(url)
        .then(response => {
            var data = response.data
            var skill = JSON.stringify(data['cryptoblades'].php);

            console.log(data)
            console.log(skill)
            msg.channel.send("<:skill:871985107215474736> SKILL VALUE:  ₱***" + skill + "***")
        })
}