//import AXIOS
const axios = require('axios');

module.exports = function(msg, args) {
    let keywords = args;
    let url = "https://api.coingecko.com/api/v3/simple/price?ids=cryptoblades&vs_currencies=php";
    
    if (args.length > 0) {
        keywords = args.join(" ");
    }
    var total = 0;      
    axios(url)
        .then(response => {
            var data = response.data
            var skill = JSON.stringify(data['cryptoblades'].php);
            total = keywords * skill;
            console.log(total)
            console.log(args)
            msg.delete({timeout: '1000'});
            msg.channel.send("<:skill:871985107215474736> SKILL CONVERSION:  (RATE: " + skill + ") => ₱***" + total.toFixed(2) + "***")
        })
}