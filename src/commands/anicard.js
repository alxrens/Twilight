const sq = require('../../config/sq');
const { SlashCommandBuilder, EmbedBuilder, ComponentType, ButtonStyle } = require("discord.js");
const axios = require('axios').default;
const anidb = require('../models/animeclaim');
const { QueryTypes } = require('sequelize');
const { ButtonBuilder, ActionRowBuilder } = require("@discordjs/builders");
const {v4: uuidv4} = require('uuid');



    module.exports = {
        data : new SlashCommandBuilder()
            .setName('animecard').setDescription('claim your animecard!')
            .addBooleanOption(option => option
                .setName('check_claim')
                .setDescription(`check your claim? if you run this command the roll card isn't going to be executed`)
                .setRequired(false))
            ,
        async execute(interaction){
            const random = Math.floor(Math.random() * 134545)
            const bool = interaction.options.getBoolean('check_claim');
           const chara = await axios.get(`https://www.animecharactersdatabase.com/api_series_characters.php?character_id=${random}`, {
            "axios-retry" : {
                retries : 5
            }
           })
           
            const name = chara.data.name;
            const image = chara.data.character_image;
            const anime = chara.data.origin;
            
            console.log(interaction.user.id)

            if(bool){
                let data = await sq.query(`select * from waifuclaims w where w."user" = ?`, {
                    type : QueryTypes.SELECT,
                    replacements : [interaction.user.id]
                });
                console.log(data)
                if(data.length){
                    const embed = new EmbedBuilder()
                    .setColor("#114ee8")
                    .setTitle("this is the card that you have claimed")
                    .setDescription("this anime card has been claimed, roll again to claim another card")
                    .setImage(image);
                    interaction.reply({embeds : [embed]});
                }else{
                    interaction.reply(`You don't have any card yet. Use /animecard to claim your card`)
                }
            }else{
                //check if the anime have been claimed or not in the database
            let check = await sq.query('select * from waifuclaims wc where wc.chid  = ?', {
                type : QueryTypes.SELECT,
                replacements : [random]
            });


            if (check.length) {
                const embed = new EmbedBuilder()
                .setColor("#114ee8")
                .setTitle(name)
                .addFields({name: 'Anime Origin', value: anime})
                .setDescription("this anime card has been claimed, roll again to claim another card")
                .setImage(image);
                return interaction.reply({embeds : [embed]});
            }

                //set a new button for the discord button
                //customId is also being used as interaction id
                let claim  = new ButtonBuilder()
                .setCustomId("claim")
                .setLabel("Claim")
                .setStyle(ButtonStyle.Success);
                let row = new ActionRowBuilder().addComponents(claim);

                const embed = new EmbedBuilder()
                .setColor('#2e51a2')
                .setTitle(name)
                .setDescription("Quick claim this card before the card is being claimed by other members")
                .addFields({name: 'Anime Origin', value: anime})
                .setImage(image);
                interaction.reply({embeds : [embed], components : [row]});

                //setting up collector for the interaction lateron
                const collector = interaction.channel.createMessageComponentCollector({
                    ComponentType : ComponentType.Button,
                    time : 60 * 1000
                });

                //collect the interaction
                collector.on('collect', async (interaction) => {
                    //check the called interactionId
                    if (interaction.customId === 'claim') {
                        const id  = uuidv4();

                        const embed = new EmbedBuilder()
                        .setColor("#114ee8")
                        .setTitle(name)
                        .setDescription(`congratulations ${interaction.user.username} you have claimed this card`)
                        .addFields({name: 'Anime Origin', value: anime})
                        .setImage(image);
                        let claim = new ButtonBuilder()
                        .setCustomId("claim")
                        .setLabel("Claim")
                        .setStyle(ButtonStyle.Success)
                        .setDisabled(true);
                        let row = new ActionRowBuilder()
                        .addComponents(claim);

                        //update the embed claimed card on the discord
                        await interaction.update({embeds : [embed], components : [row]});
                        
                        //input the claimed card to the database
                        anidb.create({
                            id : id,
                            user : interaction.user.id,
                            chid : random,
                            character_name : name
                        }, () => {
                            console.log(`${interaction.user.tag} claimed waifu ${name}`);
                        });
                    }
                })
            }

            
        }
    }