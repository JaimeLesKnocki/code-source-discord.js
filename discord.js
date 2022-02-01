var Discord = require("discord.js");
var Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

var prefix = "{votre prefix}"
Client.on("ready", () => {
    console.log("bot operationnel");
});
// Jusqu'au "}" affiché plus bas, il ne faut mettre que des codes destinés à des messages ici.
Client.login("{token de votre bot}");
