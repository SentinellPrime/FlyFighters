const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

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

client.on("guildMemberAdd", async (member) =>{
    const img = await generateImage(member)
        member.guild.channels.cache.get(welcomeChannelId).send({
            content: `Hoşgeldin! <@${member.id}>`,
            files: [img]
        })
})





client.login(process.env.Token)