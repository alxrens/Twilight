const fs = require('fs');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config({});



const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.commands = new Collection();
const commands = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
for (const command of commands) {
    const commandFile = require(`./commands/${command}`);
    client.commands.set(commandFile.data.name, commandFile);
};


const events = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));
for (const event of events) {
    const eventFile = require(`./events/${event}`);
    if (eventFile.once) {
        client.once(eventFile.name, (...args) => eventFile.execute(...args));
    } else {
        client.on(eventFile.name, (...args) => eventFile.execute(...args));
    };
};



client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    try {
        await command.execute(interaction);
    }catch(error){
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }
});;

client.login(process.env.DISCORD_TOKEN);