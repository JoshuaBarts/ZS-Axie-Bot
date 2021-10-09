const Discord = require('discord.js');

module.exports = function(msg, args) {
    const Embed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Add more commands here => ZS-Axie-Bot")
        .setURL('https://github.com/JoshuaBarts/ZS-Axie-Bot')
        .setDescription("```(Updated)\nCOMMANDS \n\n/slp- get slp value \n/axs - get axs value\n/skill - get skill value \n/convertslp <number> - convert slp to php \n/convertaxs <number> - convert axs to php\n/convertskill <number> - convert skill to php\n/gif <search> - random gif```")
        .setImage("https://apklatestversion.com/logo/axie-infinity-apk.png")
        .setFooter("/axiehelp for commands");

        msg.channel.send(Embed);
}