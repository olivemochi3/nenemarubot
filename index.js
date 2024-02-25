require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers, // 必要なインテントを設定します
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log('Bot is ready and listening for events');
});

client.on('guildMemberRemove', member => {
    // メンバーが退出した際のログを出力
    console.log(`Member left: ${member.user.tag}`);

    // メンバーをBANする試み
    member.guild.bans.create(member.user.id).then(() => {
        console.log(`Banned ${member.user.tag}`);
    }).catch(err => {
        console.error(`Could not ban ${member.user.tag}: ${err}`);
    });
});

// 新しいメンバーがサーバーに参加した際にもログを出力するイベントリスナーを追加
client.on('guildMemberAdd', member => {
    console.log(`Member joined: ${member.user.tag}`);
});

// ボットをログインさせます
client.login(process.env.DISCORD_BOT_TOKEN);
