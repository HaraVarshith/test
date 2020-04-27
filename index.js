const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "NzAxODc0ODY1MjY2NzUzNTg3.XqbzjA.-PGypgVy_xpGlVRn8mMmfw-lDV4Q"

bot.on("message", message => {
    {
      if (message.content === 'what is my avatar?') {
         message.reply(message.author.displayAvatarURL());
      }};
      bot.login(process.env.token)
    });
//closed