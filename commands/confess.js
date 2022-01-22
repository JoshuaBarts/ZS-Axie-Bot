const { MessageEmbed, MessageAttachment, Client } = require('discord.js');
module.exports = function(msg, args) {
    if (msg.channel.type == 'dm') {
        let userContent = msg.content
        //bot.channels.get('934267055098695703').send(userContent);
        var guild = client.guilds.cache.get("874519976617324574");
        var zs = client.guilds.cache.get("565870092219318275"); // get guild by id
        var channel = zs.channels.cache.get("934286814892654653"); // get channel within guild by id
        var confessionlog = guild.channels.cache.get("934284586576384000"); //conf log
        
        const file = new MessageAttachment('jihoz.gif');
        const confessionembed = new MessageEmbed()
        .setColor("#F1C40F")
        .setDescription(`"${msg.content}"`)
        .setAuthor(`Anonymous Confession Arrived | Dm ${client.user.username} to confess 👀`)
        .setThumbnail("https://c.tenor.com/F00qGAKDOKkAAAAd/jihoz.gif")
        .setTimestamp();
    
        const logembed = new MessageEmbed()
        .setFooter(
        msg.author.tag + " | " + msg.author.id + " |",
        msg.author.displayAvatarURL()
        )
        .setTitle(`Confession Arrived`)
    
        .setDescription(`**Confessor :** ${msg.author}\n\n${msg.content}`)
        .setThumbnail(msg.author.displayAvatarURL({ size: 512, dynamic: true }))
        .setTimestamp();
    
        channel.send(confessionembed);
        confessionlog.send(logembed);
    }
}
