const { SlashCommandBuilder } = require("discord.js");
const axios = require('axios').default;
require('dotenv').config();

module.exports = {
    data : new SlashCommandBuilder()
    .setName('imagesearch').setDescription('search image through internet')
    .addStringOption(option => {
        return option.setName('input')
        .setDescription('What Image You Want to Search?')
        .setRequired(false)
    }),
    async execute(interaction) {
        let res = await axios.get(`https://api.pexels.com/v1/search?query=${interaction.options.getString("input")}`,{ headers:{Authorization :process.env.PEXELS_API_KEY}});
        const data = res.data.photos;
        const url = res.data.photos[Math.floor(Math.random() * data.length)].src.original;
        interaction.reply(url);
    }
}