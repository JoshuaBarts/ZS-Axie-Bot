
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

//music bot
const ytdl = require('ytdl-core');



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
    const serverQueue = queue.get(msg.guild.id);

    //bot function
    async function execute(message, serverQueue) {
        const args = message.content.split(" ");
      
        const voiceChannel = msg.member.voice.channel;
        if (!voiceChannel)
          return msg.channel.send(
            "You need to be in a voice channel to play music!"
          );
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
          return msg.channel.send(
            "I need the permissions to join and speak in your voice channel!"
          );
        }
      
        const songInfo = await ytdl.getInfo(args[1]);
        const song = {
              title: songInfo.videoDetails.title,
              url: songInfo.videoDetails.video_url,
         };
      
        if (!serverQueue) {
          const queueContruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
          };
      
          queue.set(msg.guild.id, queueContruct);
      
          queueContruct.songs.push(song);
      
          try {
            var connection = await voiceChannel.join();
            queueContruct.connection = connection;
            play(msg.guild, queueContruct.songs[0]);
          } catch (err) {
            console.log(err);
            queue.delete(msg.guild.id);
            return msg.channel.send(err);
          }
        } else {
          serverQueue.songs.push(song);
          return msg.channel.send(`${song.title} has been added to the queue!`);
        }
      }

      function stop(msg, serverQueue) {
        if (!msg.member.voice.channel)
          return msg.channel.send(
            "You have to be in a voice channel to stop the music!"
          );
          
        if (!serverQueue)
          return msg.channel.send("There is no song that I could stop!");
          
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
      }
      
      function play(guild, song) {
        const serverQueue = queue.get(guild.id);
        if (!song) {
          serverQueue.voiceChannel.leave();
          queue.delete(guild.id);
          return;
        }
      
        const dispatcher = serverQueue.connection
          .play(ytdl(song.url))
          .on("finish", () => {
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
          })
          .on("error", error => console.error(error));
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
        serverQueue.textChannel.send(`Start playing: **${song.title}**`);
      }
      
    switch(msg.content) {

        case `${prefix}playmusic` :
            execute(msg, serverQueue);
            break;
        case `${prefix}stopmusic` :
            stop(msg, serverQueue);
            break;
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
                var user_ = user.toString();
                msg.channel.send(`Bot picked ${user_}!`);
        break;

        case `${prefix}flip`:
           
            var array_ = (Math.floor(Math.random() * 2) == 0);

            if (array_) {
                msg.channel.send(`Heads`);
            }
            else {
                msg.channel.send(`Tails`);
            }
                
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