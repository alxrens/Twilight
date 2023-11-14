const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const axios = require('axios').default;

module.exports = {
    data : new SlashCommandBuilder()
            .setName("roastme").setDescription("Roast yourself if you feel like you're a massochist"),
            async execute(interaction){
                axios
                .get("https://evilinsult.com/generate_insult.php?lang=en&type=plaintext")
                .then((res) => {
                    const result = res.data;
                    interaction.reply(`Hey ${interaction.user.username}, ${result}`)
                    
                })
            }
}