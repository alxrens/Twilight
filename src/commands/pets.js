const { SlashCommandBuilder } = require("discord.js");
const axios = require('axios').default;

module.exports = {
    data: new SlashCommandBuilder()
      .setName("pets")
      .setDescription("Get a pet pic >:3")
      .addStringOption(option => {
        return option
          .setName("pets")
          .setDescription("pick your pet >:3")
          .setRequired(true)
          .addChoices(
            { name: 'cats', value: 'cats'}, 
            { name: 'shibes', value: 'shibes'},
            { name: 'foxes', value: 'foxes'},
            { name: 'male_horse', value: 'male_horse'}
          );
      }),
        async execute(interaction) {
          try {
            let pet = interaction.options.getString("pets");
    
            if(pet == "cats"){
                axios.get(`https://api.thecatapi.com/v1/images/search`)
                  .then((res) => {
                    interaction.reply(res.data[0]);
                  })
            } else if(pet == "foxes"){
                axios.get("https://randomfox.ca/floof/")
                .then((res) => {
                    const result = res.data.image;
                    interaction.reply(result);
                })
            } else if(pet == "male_horse"){
                
                return interaction.reply('https://i.pinimg.com/564x/fc/e2/74/fce2740d6f3fe82e8d934d1d67169a4b.jpg');
            } else if (pet == "shibes") {
              axios.get("https://dog.ceo/api/breed/shiba/images/random/1").then((res) => {
                const result = res.data.message[0];
                interaction.reply(result);
              })
            }
          } catch (error) {
            interaction.channel.send("An error occurred while trying to fetch a pet. Please try again later.");
          }

        }
};