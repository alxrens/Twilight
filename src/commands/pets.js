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
            { name: 'birds', value: 'birds'},
            { name: 'cats', value: 'cats'}, 
            { name: 'shibes', value: 'shibes'},
            { name: 'foxes', value: 'foxes'},
            { name: 'male_horse', value: 'male_horse'}
          );
      }),

        



        async execute(interaction) {
            let pet = interaction.options.getString("pets");
    
            if(pet == "birds" || pet == "cats" || pet =="shibes"){
                axios.get(`https://shibe.online/api/${pet}`)
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
            }
        }
};