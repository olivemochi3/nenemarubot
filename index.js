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

client.login('MTxMTI1ODcyODk5NzcxNTk5OA.G12oAW.eSq02T0qye94Y8iUY0Nq0C4_RG8y1giWgOIdL0');
