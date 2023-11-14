
const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription("List all available commands"),
	async execute(interaction) {
        const fs = require('fs');
        const command = fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));
        const fileName = '' + command;
        const commandName = fileName.replaceAll('.js', ' ');
        const sure = commandName.replaceAll('.js', ' ');

		const cmds = sure;
		const tick = "```";
		const css = "```css"
		await interaction.reply(`${tick}diff\n+ Twilight\n+ Here are the list of available commands:\n\r\r${cmds}\n\r\r- Start typing a slash command to see command description.${tick}`);
	},
};