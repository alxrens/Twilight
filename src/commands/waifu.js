const { SlashCommandBuilder } = require("discord.js");
const axios = require("axios").default;
require('dotenv').config()

const tags = [];
const toss = [];
const nsfwo = []

axios.get("https://api.waifu.im/tags")
  .then((res) => {
    const versatile = res.data.versatile;
    const nsfw = res.data.nsfw;

    for (let i = 0; i < nsfw.length; i++) {
      tags.push({ name: `(18++) ${nsfw[i]}`, value: nsfw[i] });
      nsfwo.push(nsfw[i]);
    }
  });

module.exports = {
  data: new SlashCommandBuilder()
    .setName("waifu")
    .setDescription("Get a random waifu")
    .addStringOption(option => {
      return option
        .setName("tag")
        .setDescription("Pick your potions my boy")
        .setRequired(true)
        .addChoices({ name: 'maid', value: 'maid'}, { name: 'waifu', value: 'waifu' }, { name: 'oppai', value: 'oppai' }, { name: 'selfies', value: 'selfies' }, { name: 'uniform', value: 'uniform' }, { name: '(18++) ass', value: 'ass' }, { name: '(18++) hentai', value: 'hentai' }, { name: '(18++) milf', value: 'milf' }, { name: '(18++) oral', 
        value: 'oral' }, { name: '(18++) paizuri', value: 'paizuri' }, { name: '(18++) ecchi', value: 'ecchi' }, { name: '(18++) ero', value: 'ero' });
    }),
  async execute(interaction) {
    let chosenTag = interaction.options.getString("tag");
    if(interaction.channel.name !== process.env.NSFW_CHANNEL && nsfwo.includes(chosenTag)){
        return interaction.reply(`you're using this tag on SFW channel?? there's a lot of child in here you pervert!! >:(`);
    }
    axios.get(`https://api.waifu.im/search?included_tags=${chosenTag}`)
      .then((res) => {
        interaction.reply(res.data.images[0].url);
      })
      .catch((error) => {
        console.error(error);
        interaction.reply("An error occurred while trying to fetch a waifu. Please try again later.");
      });
  },
};