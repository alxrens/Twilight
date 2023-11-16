const { SlashCommandBuilder } = require("discord.js");



module.exports = {
    data: new SlashCommandBuilder().setName("testingground").setDescription("Use this for testing ;)"),
        async execute(interaction) {
          return interaction.reply(`It works..`)

        }
};