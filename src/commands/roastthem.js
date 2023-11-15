const { SlashCommandBuilder} = require("@discordjs/builders");
const axios = require('axios').default;

module.exports = {
    data : new SlashCommandBuilder()
            .setName("roastthem")
            .setDescription("Roast your friends if you feel like you're a devil")
            .addUserOption((option) => option.setName('target').setDescription('Who do you want to roast?').setRequired(false)),
            async execute(interaction){
                const target = interaction.options.getUser("target");
                if (!target) {
                    return interaction.reply(`Bruh, who you want to roast?`)
                } else {
                  return await  axios
                .get("https://evilinsult.com/generate_insult.php?lang=en&type=plaintext")
                .then((res) => {
                    const result = res.data;
                    interaction.reply(`Hey ${target}, ${result}`)
                    
                }).catch((error) => {
                    console.error(error);
                    interaction.reply('An error occurred while trying to fetch a roast. Please try again later.');
                });
                }
                
            }
}