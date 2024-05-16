const { SlashCommandBuilder } = require("discord.js")
const axios = require('axios').default;
    module.exports = {
        data : new SlashCommandBuilder()
            .setName('aniquote').setDescription('get those cool anime line'),
        async execute(interaction){
            interaction.reply("GOMENN, this command is currently not available");
            // axios.get("https://animechan.xyz/api/random").then((res) => {
            //     interaction.reply(res.data.quote + " - " + res.data.character + " " + `(${res.data.anime})`);
            // })
        }
    }