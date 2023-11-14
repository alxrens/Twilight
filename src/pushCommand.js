require('dotenv').config();
const fs = require('fs');
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const token = process.env.DISCORD_TOKEN;
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');


const commands = [];

const files = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
for(const file of files){
    const command = require(`../src/commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), {body : commands})
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);