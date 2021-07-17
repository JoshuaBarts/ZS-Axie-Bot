

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
    var num = 0;
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var x = JSON.stringify(data['smooth-love-potion'].php);
            console.log("this is x " + isNaN(x) + "= " + x)
            var num = x;
            console.log(isNaN(num));
            
            
            
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    xmlhttp.abort();
    return num;
    
}

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
    if (msg.content === `${prefix}axie`) {
        msg.channel.send("Pakyu");
        //msg.channel.send(getSLP());
        //or if you want to mention name
        //msg.reply("Putang ina mo!");
    }
    else if (msg.content == `${prefix}abu`) {
        msg.channel.send("rat");
    }
    else if (content[0] == `${prefix}poll`) {
        var content = msg.content.split(" ");
        const Embed = new Discord.MessageEmbed()
        .setColor(0xFFC300)
        .setTitle("Poll")
        .setDescription("/poll <question> to start a Paul.");

        if(!content[1]) {
            msg.channel.send(Embed);  
        }
        else {
            let msgArg = content.slice(1).join(" ");
            
            msg.channel.send("🙋 "+ "**" + msgArg + "**").then( message => {
            message.react("👍").catch(console.error);
            message.react("👎").catch(console.error);
            message.react("🖕").catch(console.error);
            message.delete({timeout: 1000}).catch(console.error);
            });

            
        }

        
    }
    else if (msg.content == `${prefix}hello axie`) {
        msg.channel.send("You got " + Math.floor(Math.random() * 10) + " free SLP!");
    }
    else if (msg.content == `${prefix}onjie`) {
        msg.channel.send(":regional_indicator_i: :regional_indicator_o: :regional_indicator_n: :regional_indicator_a: ");
    }
    else if (msg.content == `${prefix}axie help`) {
        msg.channel.send("```COMMANDS \n\n/slp- get slp value \n/convert <number> - convertslp to php \n/hello axie - random slp \n/axie help - list of commands```");
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
                //getSLP();
                console.log(x);
                msg.channel.send("SLP VALUE:  ₱" + x + "");
            }
            
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
        
    }
    else if (content[0] == `${prefix}convert`) {
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
                msg.channel.send(number + " SLP x ₱" + x + " = " + "₱" + total.toFixed(2));
            }
        }
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
       
        
    }
    
});


//bot token
client.login(process.env.BOT_TOKEN);