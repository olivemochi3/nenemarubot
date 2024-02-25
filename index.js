require('dotenv').config();


const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
    ]
});

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('guildMemberRemove', member => {
    member.guild.bans.create(member.user.id).then(() => {
        console.log(`Banned ${member.user.username}`);
    }).catch(err => {
        console.error(`Could not ban ${member.user.username}: ${err}`);
    });
});

client.login(process.env.DISCORD_BOT_TOKEN);


