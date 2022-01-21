const slp = require("./commands/slp.js");
const SLP = require("./commands/slp.js");
const axs = require("./commands/axs.js");
const AXS = require("./commands/axs.js");
const convertslp = require("./commands/convert-slp.js");
const convertaxs = require("./commands/convert-axs.js");
const skill = require("./commands/skill.js");
const SKILL = require("./commands/skill.js");
const convertskill = require("./commands/convert-skill.js");
const axiehelp = require("./commands/axiehelp.js");
const gif = require("./commands/gif.js");
const nuke = require("./commands/nuke.js");
const update = require("./commands/update.js");
//DISCORD COMMANDS
const commands =  {
    slp, SLP, axs, AXS, convertslp, convertaxs, skill, SKILL, convertskill, axiehelp, gif, nuke, update
}

module.exports = async function (msg) {

    var tokens = msg.content.split(" ");
    var command = tokens.shift();
    if (command.charAt(0) === "/") {
       command = command.substring(1);
       commands[command](msg, tokens);
    }
}