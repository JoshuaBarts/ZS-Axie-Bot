//import dotenv package

require('dotenv').config();

const {MessageAttachment, MessageEmbed} = require('discord.js')
//import Discord.js library
const Discord = require('discord.js');
const client = new Discord.Client();

//import coingecko-api
const CoinGecko = require('coingecko-api');
var CoingGeckoClient = new CoinGecko();


const { response } = require('express');

process.setMaxListeners(Infinity);

//check if Axie Bot is online
client.on("ready", () => {
    client.user.setActivity("Dm me your confessions 😘", {type: "PLAYING"});
    console.log("Bot is ready!");
});


//confession
client.on("message", message => {
    if (message.channel.type == 'dm') {
        let userContent = message.content
        //bot.channels.get('934267055098695703').send(userContent);
        var guild = client.guilds.cache.get("874519976617324574");
        var zs = client.guilds.cache.get("565870092219318275"); // get guild by id
        var channel = zs.channels.cache.get("934286814892654653"); // get channel within guild by id
        var confessionlog = guild.channels.cache.get("934284586576384000"); //conf log
        
        const file = new MessageAttachment('jihoz.gif');
        const confessionembed = new MessageEmbed()
        .setColor("#F1C40F")
        .setDescription(`"${message.content}"`)
        .setAuthor(`Anonymous Confession Arrived | Dm ${client.user.username} to confess 👀`)
        .setThumbnail("https://c.tenor.com/F00qGAKDOKkAAAAd/jihoz.gif")
        .setTimestamp();
    
        const logembed = new MessageEmbed()
        .setFooter(
            message.author.tag + " | " + message.author.id + " |",
            message.author.displayAvatarURL()
        )
        .setTitle(`Confession Arrived`)
    
        .setDescription(`**Confessor :** ${message.author}\n\n${message.content}`)
        .setThumbnail(message.author.displayAvatarURL({ size: 512, dynamic: true }))
        .setTimestamp();
    
        channel.send(confessionembed);
        confessionlog.send(logembed);
    }
})

//commandHandler
const commandHandler = require("./commands");

client.on("message", commandHandler);

//bot token
client.login(process.env.BOT_TOKEN);