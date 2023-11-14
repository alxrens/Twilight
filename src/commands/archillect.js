const { SlashCommandBuilder } = require("discord.js");
const link = "https://archillect.com/"



module.exports = {
    data: new SlashCommandBuilder()
        .setName("archillect").setDescription("Get Stunning an stimulating image"),
        async execute(interaction) {
            let limitNum = 400010
            let mathMin = Math.floor((Math.random() * limitNum) + 1);
            let mathPlus = Math.floor((Math.random() * limitNum) + 1);
            if (mathPlus > mathMin) {
                let indexNumber = limitNum - mathMin;
                return interaction.reply(link + indexNumber);
            } else {
                let calculate = limitNum - mathMin + mathPlus;
                if (calculate > limitNum) {
                    let indexNumber = limitNum - mathMin;
                return interaction.reply(link + indexNumber);
                } else {
                    return interaction.reply(link + calculate);
                }
            }
        }
};