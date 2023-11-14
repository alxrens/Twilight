const { SlashCommandBuilder } = require("discord.js");


module.exports = {
    data : new SlashCommandBuilder()
            .setName("about").setDescription("About Twilight"),
            async execute(interaction){
                const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const axios = require('axios').default;

module.exports = {
    data : new SlashCommandBuilder()
            .setName("urban").setDescription("Get The Internet Slang"),
            async execute(interaction){
                axios
                .get("https://api.urbandictionary.com/v0/random")
                .then((res) => {
                    const dataLength = res.data.list.length;
                    const randomIndex = Math.floor(Math.random() * dataLength);
                    const randomWord = res.data.list[randomIndex];
                    const embed = new EmbedBuilder()
                            .setColor("#114ee8")
                            .setTitle(randomWord.word)
                            .setDescription(randomWord.definition)
                    interaction.reply({embeds : [embed]});
                })
            }
}
            }
}