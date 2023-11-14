
const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription("List all available commands"),
	async execute(interaction) {
        const fs = require('fs');
        const commands = fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));
		const commandNames = commands.map(file => file.replace('.js', ''));
		const cmds = commandNames.join('\n');
        

		const tick = "```";
		const css = "```css"
		await interaction.reply(`${tick}diff\n+ Twilight\n+ Here are the list of available commands:\n\r\r${cmds}\n\r\r- Start typing a slash command to see command description.${tick}`);
	},
};