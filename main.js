
//import dotenv package

require('dotenv').config();

//import Discord.js library
const Discord = require('discord.js');
const client = new Discord.Client();

//import coingecko-api
const CoinGecko = require('coingecko-api');
var CoingGeckoClient = new CoinGecko();

//import database
const Sequelize = require('sequelize');

//Get the current price of Axie SLP vs_currencies PHP

process.setMaxListeners(Infinity);

function showSLP(data) {
    return data;
}

//check if Axie Bot is online
client.on("ready", () => {
    client.user.setActivity("Axie BiOT", {type: "PLAYING"});
    //getSLP();
    console.log("Bot is ready!");
});

const prefix = "/";
//Axie message
client.on("message", msg => {
    var content = msg.content.split(" ");

    switch(msg.content) {
        case `${prefix}axie`:
            msg.channel.send("Pakyu");
            break;
        
        case `${prefix}abu`:
            msg.channel.send("rat");
            break;

        case `${prefix}hello axie`:
            msg.channel.send("You got " + Math.floor(Math.random() * 10) + " free SLP!");
            break;

        case `${prefix}onjie`:
            msg.channel.send(":regional_indicator_i: :regional_indicator_o: :regional_indicator_n: :regional_indicator_a: ");
            break;

        case `${prefix}axie help`:
            const Embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Click here: ZS Axie Website")
            .setURL('https://joshuabarts.github.io/axie-web/')
            .setDescription("```COMMANDS \n\n/slp- get slp value \n/convert <number> - convert slp to php \n/axs - get axs value\n/hello axie - random slp \n/axie help - list of commands \n/onjie - return IONA \n/abu - return rat```")
            .setImage("https://apklatestversion.com/logo/axie-infinity-apk.png")
            .setFooter("./.");

            msg.channel.send(Embed);
            break;

        case `${prefix}slp`:
        case `${prefix}SLP`:
            process.setMaxListeners(Infinity);
            var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
            var xmlhttp = new XMLHttpRequest();
            var url = "https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=php";

            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                    var x = JSON.stringify(data['smooth-love-potion'].php);
                  
                    var data = JSON.parse(this.responseText);
                    var x = JSON.stringify(data['smooth-love-potion'].php);
                    console.log(x);
                    var num = x * 1;
                    msg.channel.send("<:smoothlovepotion:871984274574823496> SLP VALUE:  ₱***" + num + "***");
                }
            
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            break;

        case `${prefix}axs`:
        case `${prefix}AXS`:
            process.setMaxListeners(Infinity);
            var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
            var xmlhttp = new XMLHttpRequest();
            var url = "https://api.coingecko.com/api/v3/simple/price?ids=axie-infinity&vs_currencies=php";

            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                    var x = JSON.stringify(data['axie-infinity'].php);
                    console.log(x);
                    var num = x * 1;
                    msg.channel.send("<:axs:871984785696886804> AXS VALUE:  ₱" + num + "");
                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            break;
        
        case `${prefix}skill`:
        case `${prefix}SKILL`:
        case `${prefix}Skill`: 
            process.setMaxListeners(Infinity);
            var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
            var xmlhttp = new XMLHttpRequest();
            var url = "https://api.coingecko.com/api/v3/simple/price?ids=cryptoblades&vs_currencies=php";

            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                    var x = JSON.stringify(data['cryptoblades'].php);
                    console.log(x);
                    var num = x * 1;
                    msg.channel.send("<:skill:871985107215474736> SKILL(CryptoBlades) VALUE:  ₱" + num + "");
                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
            break;
        
        case `${prefix}mist`:
            process.setMaxListeners(Infinity);
            var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
            var xmlhttp = new XMLHttpRequest();
            var url = "https://api.coingecko.com/api/v3/simple/price?ids=mist&vs_currencies=php";

            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                    var x = JSON.stringify(data['mist'].php);
                    console.log(x);
                    var num = x * 1;
                    msg.channel.send("MIST VALUE:  ₱" + num + "");
                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();        
            break;

        case `${prefix}ethereum`:
            process.setMaxListeners(Infinity);
            var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
            var xmlhttp = new XMLHttpRequest();
            var url = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=cad";

            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var data = JSON.parse(this.responseText);
                    var x = JSON.stringify(data['ethereum'].cad);
                    console.log(x);
                    var num = x * 1;
                    msg.channel.send("ETH VALUE:  $" + num + "");
                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();        
        break;

        case `${prefix}roll`:
                var user = msg.guild.members.cache.random();
                
                msg.channel.send(`${user.user}`);
        break;

        default :
            
            break;
    }

    if (content[0] == `${prefix}convert` || content[0] == `${prefix}CONVERT`) {
        var num = content[1];
        
        var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
        var xmlhttp = new XMLHttpRequest();
        var url = "https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=php";
        var xx = 0;
        var total = 0;
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                var x = JSON.stringify(data['smooth-love-potion'].php);
                console.log("this is x " + isNaN(x) + "= " + x)
                xx = x;
                var number = num * 1;
                total = number * x;
                console.log(total);
                if (isNaN(total)) {
                    msg.channel.send("Please enter a number.");
                }
                else {
                    msg.channel.send(number + " SLP x ₱" + x + " = " + "₱" + total.toFixed(2));
                }
                
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

    if (content[0] == `${prefix}convert-skill` || content[0] == `${prefix}CONVERT-SKILL`) {
        var num = content[1];
        
        var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
        var xmlhttp = new XMLHttpRequest();
        var url = "https://api.coingecko.com/api/v3/simple/price?ids=cryptoblades&vs_currencies=php";
        var xx = 0;
        var total = 0;
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                var x = JSON.stringify(data['cryptoblades'].php);
                console.log("this is x " + isNaN(x) + "= " + x)
                xx = x;
                var number = num * 1;
                total = number * x;
                console.log(total);
                if (isNaN(total)) {
                    msg.channel.send("Please enter a number.");
                }
                else {
                    msg.channel.send(number + " SKILL x ₱" + x + " = " + "₱" + total.toFixed(2));
                }
                
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
});


//bot token
client.login(process.env.BOT_TOKEN);