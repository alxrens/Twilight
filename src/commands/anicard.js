const sq = require('../../config/sq');
const { SlashCommandBuilder, EmbedBuilder, ComponentType, ButtonStyle, Message } = require("discord.js");
const axios = require('axios').default;
const anidb = require('../models/animeclaim');
const { QueryTypes } = require('sequelize');
const { ButtonBuilder, ActionRowBuilder } = require("@discordjs/builders");
const {v4: uuidv4} = require('uuid');


    let logs = [];
    let charas = [];
    let buttonId = uuidv4();

    function generateUuid(){
         buttonId = uuidv4();
    }


const claimedCards = new Set();
let unix = `claim_${uuidv4()}`
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
            const chid = random;
            charas.push({name, image, anime, chid});
            

            if(bool){
                let data = await sq.query(`select w."user", w.chid, w.character_name, w.anime_name from waifuclaims w where w."user" = ?`, {
                    type : QueryTypes.SELECT,
                    replacements : [interaction.user.id]
                });
                // console.log(data)
                let characters = "";
                for (let j = 0; j < data.length; j++) {
                    characters += `${data[j].anime_name} - ` + data[j].character_name + "\n";
                    
                }

                if(data.length){
                    const embed = new EmbedBuilder()
                    .setColor("#114ee8")
                    .setTitle("this is the card that you have claimed")
                    .setDescription(characters)
                    .setImage("https://asutoraeanooka.files.wordpress.com/2010/05/goodlucksaki.jpg");
                    return interaction.reply({embeds : [embed], ephemeral : true});
                }else{
                    return interaction.reply({content:`You don't have any card yet. Use /animecard to claim your card`, ephemeral : true})
                }
            }
                //check if the anime have been claimed or not in the database
            let check = await sq.query('select * from waifuclaims wc where wc.chid  = ?', {
                type : QueryTypes.SELECT,
                replacements : [random]
            });

            
            setInterval(()=> {logs = []}, 30 * 60 * 1000)
            setInterval(generateUuid, 1000)
            if (check.length) {
                const embed = new EmbedBuilder()
                .setColor("#114ee8")
                .setTitle(name)
                .addFields({name: 'Anime Origin', value: anime, inline : true})
                .setDescription("this anime card has been claimed, roll again to claim another card")
                .setImage(image);
                return await interaction.reply({embeds : [embed]});
            }

               
                //set a new button for the discord button
                //customId is also being used as interaction id
                let claim  = new ButtonBuilder()
                .setCustomId(unix)
                .setLabel("Claim")
                .setStyle(ButtonStyle.Success);
                let row = new ActionRowBuilder().addComponents(claim);

                const filter = i => i.customId.startsWith(unix) && i.isButton();
                const collector = await interaction.channel.createMessageComponentCollector({
                    ComponentType : ComponentType.Button,
                    filter,
                    idle : 20000
                });


                const embed = new EmbedBuilder()
                .setColor('#2e51a2')
                .setTitle(name)
                .setDescription("Quick claim this card before the card is being claimed by other members")
                .addFields({name: 'Anime Origin', value: anime, inline : true})
                .setImage(image);
                await interaction.reply({embeds : [embed], components : [row]});

                //setting up collector for the interaction lateron
                
                //collect the interaction
                collector.on('collect', async (interaction) => {
                    //check the called interactionId
                    console.log(collector.collected);
                    try {
                        if (interaction.customId.startsWith('claim_')) {
                            const id  = uuidv4();
                            
                            console.log(interaction.customId)
                            const embed = new EmbedBuilder()
                            .setColor("#114ee8")
                            .setTitle(name)
                            .setDescription(`congratulations ${interaction.user.username} you have claimed this card`)
                            .addFields({name: 'Anime Origin', value: anime, inline : true})
                            .setImage(image);
                            let claim = new ButtonBuilder()
                            .setCustomId("claim")
                            .setLabel("Claim")
                            .setStyle(ButtonStyle.Success)
                            .setDisabled(true);
                            let row = new ActionRowBuilder()
                            .addComponents(claim);
                            //update the embed claimed card on the discord
                            await interaction.update({embeds : [embed], components : [row], fetchReply: true});
                            
                            //input the claimed card to the database
                            await   anidb.create({
                                id : id,
                                user : interaction.user.id,
                                chid : random,
                                character_name : name,
                                anime_name : anime
                            });
                            claimedCards.add(random);
                            console.log(`${interaction.user.tag} claimed waifu ${name}`);
                             return collector.stop();
                            
                        }
                        collector.on('end', (interaction)=>{
                            interaction.update('this button is no longer available');
                        })
                    } catch (error) {
                        console.log(error);
                    }
                    
                })
            
            }
    }
