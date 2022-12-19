const Discord = require("discord.js")
require("dotenv").config()


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
});

client.on('ready', () => {
        console.log(`${client.user.tag} çevrimiçi`)
});

const welcomeChannelId = "747026385649795132"

client.on("guildMemberAdd", (member) =>{
        member.guild.channels.cache.get(welcomeChannelId).send(`Hoşgeldin! <@${member.id}>`)
})





client.login(process.env.Token)