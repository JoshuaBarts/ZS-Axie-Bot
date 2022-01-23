const ScrapeYt = require("scrape-yt");
const spotify = require("spotify-url-info")
const Discord = require("discord.js");
const YTDL = require("discord-ytdl-core");
const { createWriteStream } = require("fs");

//New discord.js client
const Client = new Discord.Client();


module.exports = async function(msg, args) {

    //Do not detect bots
    if (msg.author.bot) return;

    let keywords = args;
    if (args.length > 0) {
        keywords = args.join(" ");
    }

    //If no args is provided
    if (!args[0]) return msg.channel.send(`⛔ | ${msg.author}, Please enter the YouTube name of a song !`);

    //Regex to check if an url is a spotify song
    const isSpotifyURL = /https?:\/\/(?:embed\.|open\.)(?:spotify\.com\/)(?:track\/|\?uri=spotify:track:)((\w|-){22})/

    if (args[0].match(isSpotifyURL)) {
        const spotifyData = await spotify.getPreview(args[0]).catch(e => { })
        args = new Array(`${spotifyData.artist} - ${spotifyData.track}`)
    }

    //The bot searches the music provided on YouTube
    const url = await ScrapeYt.search(args.join(" "));

    //New match
    let match;

    try {
        //The bot is trying to find the music provided
        match = `https://www.youtube.com/watch?v=${url[0].id}`
    } catch (e) {
        //If the music is not found
        return message.channel.send(`⛔ | ${message.author}, i didn't find anything for : ${args.join(" ")} !`);
    }

    //Conversion of the stream
    let stream = YTDL(match, { encoderArgs: ['-af','dynaudnorm=f=200'], fmt: 'mp3', opusEncoded: false });

    try {
        //Confirmation message
        message.channel.send(`:notes: | ${message.author}, I'll try to send ${infos[0].title} when the download is finished...`);
        const channelID = message.channel.id;

        //Saving the file in the folder 'download'
        stream.pipe(createWriteStream(__dirname + `/download/${url[0].title}.mp3`))
            .on('finish', () => {
                //Sending the mp3 file
                try {
                    const file = new Discord.MessageAttachment(__dirname + `/download/${url[0].title}.mp3`, `${url[0].title}.mp3`)
                    Client.channels.cache.get(channelID).send(`🎵 | ${message.author}, music : ${url[0].title} in mp3.`, file)
                } catch (e) {
                    return Client.channels.cache.get(channelID).send(`⛔ | ${message.author}, I didn't manage to send the music... maybe it's too heavy for Discord ? Or maybe I don't have the required permissions to upload this type of file on this server...`);
                }
            })
    fs.unlinkSync(__dirname + `/download/${url[0].title}.mp3`);
    } catch (e) {
        //If the music is not found
        return message.channel.send(`⛔ | ${message.author}, I didn't find anything for : ${args.join(" ")} ! Maybe it is impossible to retrieve this music...`);
    }

}