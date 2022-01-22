//import dotenv package

require('dotenv').config();
const { MessageEmbed, MessageAttachment } = require('discord.js');
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

//commandHandler
const commandHandler = require("./commands");

client.on("message", commandHandler);

//bot token
client.login(process.env.BOT_TOKEN);