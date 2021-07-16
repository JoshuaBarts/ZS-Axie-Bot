

//import dotenv package

require('dotenv').config();

//import Discord.js library
const Discord = require('discord.js');
const client = new Discord.Client();

//import coingecko-api
const CoinGecko = require('coingecko-api');
var CoingGeckoClient = new CoinGecko();

//Get the current price of Axie SLP vs_currencies PHP

process.setMaxListeners(Infinity);



function getSLP() {
    var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=php";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var x = parseInt(data['smooth-love-potion'].php);
            return x;
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
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
    if (msg.content === `${prefix}axie`) {
        msg.channel.send("Pakyu");
        //msg.channel.send(getSLP());
        //or if you want to mention name
        //msg.reply("Putang ina mo!");
    }
    else if (msg.content == `${prefix}abu`) {
        msg.channel.send("rat");
    }
    else if (msg.content == `${prefix}hello axie`) {
        msg.channel.send("You got " + Math.floor(Math.random() * 10) + " free SLP!");
    }
    else if (msg.content == `${prefix}slp`) {
        process.setMaxListeners(Infinity);
        var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
        var xmlhttp = new XMLHttpRequest();
        var url = "https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=php";

        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                var x = JSON.stringify(data['smooth-love-potion'].php);
                getSLP();
                console.log(x);
                msg.channel.send("SLP VALUE:  ₱" + x + "");
            }
            
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
        
    }
    else if (content[0] == `${prefix}convert`) {
        var num = content[1];
        var number = parseFloat(getSLP());
        var total = parseInt(num) * parseInt(number);
        if (isNaN(total) || total == '') {
            msg.channel.send("Please enter a number");
        }
        else {
            msg.channel.send("₱" + total.toFixed(2));
        }
        
    }
    
});


//bot token
client.login(process.env.BOT_TOKEN);