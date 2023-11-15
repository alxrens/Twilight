const { SlashCommandBuilder } = require("@discordjs/builders");


module.exports = {
    data : new SlashCommandBuilder()
            .setName("maff").setDescription("Do maff stuff ")
            .addStringOption((option) => option.setName("input").setDescription('Valueofx').setRequired(true))
            ,
            async execute(interaction){
                const Input = interaction.options.getString("input");
                if (!Input) {
                    return interaction.reply(`So x = 0?`)
                } else {
                    return interaction.reply(`go to hell with your x = ${Input}`)
                }
            }
}