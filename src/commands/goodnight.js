const { SlashCommandBuilder } = require("discord.js");




module.exports = {
  data : new SlashCommandBuilder()
      .setName('goodnight').setDescription('sweet dream'),
  async execute(interaction){
      interaction.reply(`Good night, I hope you have a nice night.`);
  }
}