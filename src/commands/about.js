const { SlashCommandBuilder } = require("discord.js");


module.exports = {
    data : new SlashCommandBuilder()
            .setName("about").setDescription("About Twilight"),
            async execute(interaction){
                const content = `Twilight is a codename for database located in ██████.
                It's main function is to store data with code name ██████ as a top secret information.
                Twilight was built under codename "黄昏 たそがれ" and was built by Ren, Nahiiko, and mad scientist "ICY".
                `;
                await interaction.reply(content);
            }
}