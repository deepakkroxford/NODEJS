const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('messageCreate', (message) => {
    console.log(message);
    if(message.author.bot) return;
    if(message.content.startsWith('create')){
        const url = message.content.split('create')[1];
        return message.reply({
            content: 'generating short id for '+url,
        });

    }
    message.reply({
        content: 'Hello, I am a Discord bot!'
    })
});


client.on('interactionCreate', interaction=>{
    console.log(interaction);
    interaction.reply('pong')
})

client.login("MTM0MTk4NjQ2MDExODgxNDgxMQ.GH41DT.wDwwVwt_Bz5JeqYL-vl1T1vk_unSyNegex1n6g");