const { ButtonBuilder, ActionRowBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, EmbedBuilder, ComponentType, ButtonStyle } = require("discord.js");
const axios = require("axios").default;
require('dotenv').config();




    module.exports = {
        data : new SlashCommandBuilder()
            .setName('anilist').setDescription('get anime')
            .addStringOption(
                option => option
                    .setName('anime')
                    .setDescription('anime name')
                    .setRequired(true)
            ).addBooleanOption(option => option
                .setName('nsfw')
                .setDescription('nsfw')
                .setRequired(false))
            ,
        async execute(interaction){
            const animeName = interaction.options.getString('anime');
            const nsfw = interaction.options.getBoolean('nsfw');
            const uri = `https://api.jikan.moe/v4/anime?q=${animeName}&limit=10`;
            if (nsfw) {
                if(interaction.channel.name !== process.env.NSFW_CHANNEL){
                    return interaction.reply(`you're turning on nsfw option on SFW channel?? there's a lot of child in here you pervert!! >:(`);
                }
                uri += '&sfw';
            }
            try {
                const res = await axios.get(uri);
                let animeTitles = [];
                let animeData = [];
                let buttons = [];
    
                for (let i = 0; i < res.data.data.length; i++) {
                    const anime = res.data.data[i];
                    const image = anime.images?.jpg?.large_image_url || 'No Image Available';
                    const releaseDate = `${anime.aired.prop.from.day}-${anime.aired.prop.from.month}-${anime.aired.prop.from.year}`;
                    const score = anime.score;
                    const thumbnail = anime.images?.jpg?.image_url || 'No Image Available';
    
                    animeTitles.push(`${i + 1}. ${anime.title} - ${score}`);
                    animeData.push({
                        title: anime.title,
                        score: anime.score,
                        url: anime.url,
                        synopsis: anime.synopsis,
                        image,
                        releaseDate,
                        thumbnail,
                    });
                }

                let one = new ButtonBuilder()
                    .setCustomId('1')
                    .setLabel('1')
                    .setStyle(ButtonStyle.Secondary);
                let two = new ButtonBuilder()
                    .setCustomId('2')
                    .setLabel('2')
                    .setStyle(ButtonStyle.Secondary);
                let three = new ButtonBuilder()
                    .setCustomId('3')
                    .setLabel('3')
                    .setStyle(ButtonStyle.Secondary);
                let four = new ButtonBuilder()
                    .setCustomId('4')
                    .setLabel('4')
                    .setStyle(ButtonStyle.Secondary);
                let five = new ButtonBuilder()
                    .setCustomId('5')
                    .setLabel('5')
                    .setStyle(ButtonStyle.Secondary);
                let six = new ButtonBuilder()
                    .setCustomId('6')
                    .setLabel('6')
                    .setStyle(ButtonStyle.Secondary);
                let seven = new ButtonBuilder()
                    .setCustomId('7')
                    .setLabel('7')
                    .setStyle(ButtonStyle.Secondary);
                let eight = new ButtonBuilder()
                    .setCustomId('8')
                    .setLabel('8')
                    .setStyle(ButtonStyle.Secondary);
                let nine = new ButtonBuilder()
                    .setCustomId('9')
                    .setLabel('9')
                    .setStyle(ButtonStyle.Secondary);
                let ten = new ButtonBuilder()
                    .setCustomId('10')
                    .setLabel('10')
                    .setStyle(ButtonStyle.Secondary);
                let backToList = new ButtonBuilder()
                    .setCustomId('backToList')
                    .setLabel('Back to List')
                    .setStyle(ButtonStyle.Secondary);

                    const row1 = new ActionRowBuilder().addComponents(one, two, three, four, five);
                    const row2 = new ActionRowBuilder().addComponents(six, seven, eight, nine, ten);
                    const row3 = new ActionRowBuilder().addComponents(backToList);



                let list = animeTitles.join(`\n`);
                const firstEmbed = new EmbedBuilder()
                    .setColor('#2e51a2')
                    .setTitle(`Here's your top 10 Matching Results for ${animeName}, and please pick a number for the details of the anime.`)
                    .setDescription(list);
                interaction.reply({ embeds: [firstEmbed], components : [row1, row2, row3] });


                const collector =  interaction.channel.createMessageComponentCollector({
                    componentType: ComponentType.Button,
                    time: 60 * 1000
                });
                collector.on('collect', async (interaction) => {
                    try {
                        if (interaction.customId == '1') {
                            const embed = new EmbedBuilder()
                                .setColor('#2e51a2')
                                .setTitle(animeData[0].title)
                                .setURL(animeData[0].url)
                                .setThumbnail(animeData[0].thumbnail)
                                .addFields(
                                    {name : 'Score', value : animeData[0].score.toString(), inline : true},
                                    {name : 'Release Date', value : animeData[0].releaseDate, inline : true},
                                )
                                .setDescription(animeData[0].synopsis).setImage(animeData[0].image);
                            await interaction.update({ embeds: [embed] });
                        }
                        if (interaction.customId == '2'){
                            const embed = new EmbedBuilder()
                                .setColor('#2e51a2')
                                .setTitle(animeData[1].title)
                                .setURL(animeData[1].url)
                                .setThumbnail(animeData[1].thumbnail)
                                .addFields(
                                    {name : 'Score', value : animeData[1].score.toString(), inline : true},
                                    {name : 'Release Date', value : animeData[1].releaseDate, inline : true},
                                )
                                .setDescription(animeData[1].synopsis).setImage(animeData[1].image);
                                await interaction.update({ embeds: [embed] });
                        }
                        if (interaction.customId == '3'){
                            const embed = new EmbedBuilder()
                                .setColor('#2e51a2')
                                .setTitle(animeData[2].title)
                                .setURL(animeData[2].url)
                                .setThumbnail(animeData[2].thumbnail)
                                .addFields(
                                    {name : 'Score', value : animeData[2].score.toString(), inline : true},
                                    {name : 'Release Date', value : animeData[2].releaseDate, inline : true},
                                )
                                .setDescription(animeData[2].synopsis).setImage(animeData[2].image);
                                await interaction.update({ embeds: [embed] });
                        }
                        if (interaction.customId == '4'){
                            const embed = new EmbedBuilder()
                                .setColor('#2e51a2')
                                .setTitle(animeData[3].title)
                                .setURL(animeData[3].url)
                                .setThumbnail(animeData[3].thumbnail)
                                .addFields(
                                    {name : 'Score', value : animeData[3].score.toString(), inline : true},
                                    {name : 'Release Date', value : animeData[3].releaseDate, inline : true},
                                )
                                .setDescription(animeData[3].synopsis).setImage(animeData[3].image);
                                await interaction.update({ embeds: [embed] });
                        }
                        if (interaction.customId == '5'){
                            const embed = new EmbedBuilder()
                                .setColor('#2e51a2')
                                .setTitle(animeData[4].title)
                                .setURL(animeData[4].url)
                                .setThumbnail(animeData[4].thumbnail)
                                .addFields(
                                    {name : 'Score', value : animeData[4].score.toString(), inline : true},
                                    {name : 'Release Date', value : animeData[4].releaseDate, inline : true},
                                )
                                .setDescription(animeData[4].synopsis).setImage(animeData[4].image);
                                await interaction.update({ embeds: [embed] });
                        }
                        if(interaction.customId == '6'){
                            const embed = new EmbedBuilder()
                                .setColor('#2e51a2')
                                .setTitle(animeData[5].title)
                                .setURL(animeData[5].url)
                                .setThumbnail(animeData[5].thumbnail)
                                .addFields(
                                    {name : 'Score', value : animeData[5].score.toString(), inline : true},
                                    {name : 'Release Date', value : animeData[5].releaseDate, inline : true},
                                )
                                .setDescription(animeData[5].synopsis).setImage(animeData[5].image);
                                await interaction.update({ embeds: [embed] });
                        }
                        if(interaction.customId == '7'){
                            const embed = new EmbedBuilder()
                                .setColor('#2e51a2')
                                .setTitle(animeData[6].title)
                                .setURL(animeData[6].url)
                                .setThumbnail(animeData[6].thumbnail)
                                .addFields(
                                    {name : 'Score', value : animeData[6].score.toString(), inline : true},
                                    {name : 'Release Date', value : animeData[6].releaseDate, inline : true},
                                )
                                .setDescription(animeData[6].synopsis).setImage(animeData[6].image);
                                await interaction.update({ embeds: [embed] });
                        }
                        if(interaction.customId == '8'){
                            const embed = new EmbedBuilder()
                                .setColor('#2e51a2')
                                .setTitle(animeData[7].title)
                                .setURL(animeData[7].url)
                                .setThumbnail(animeData[7].thumbnail)
                                .addFields(
                                    {name : 'Score', value : animeData[7].score.toString(), inline : true},
                                    {name : 'Release Date', value : animeData[7].releaseDate, inline : true},
                                )
                                .setDescription(animeData[7].synopsis).setImage(animeData[7].image);
                                await interaction.update({ embeds: [embed] });
                        }
                        if(interaction.customId == '9'){
                            const embed = new EmbedBuilder()
                                .setColor('#2e51a2')
                                .setTitle(animeData[8].title)
                                .setURL(animeData[8].url)
                                .setThumbnail(animeData[8].thumbnail)
                                .addFields(
                                    {name : 'Score', value : animeData[8].score.toString(), inline : true},
                                    {name : 'Release Date', value : animeData[8].releaseDate, inline : true},
                                )
                                .setDescription(animeData[8].synopsis).setImage(animeData[8].image);
                                await interaction.update({ embeds: [embed] });
                        }
                        if(interaction.customId == '10'){
                            const embed = new EmbedBuilder()
                                .setColor('#2e51a2')
                                .setTitle(animeData[9].title)
                                .setURL(animeData[9].url)
                                .setThumbnail(animeData[9].thumbnail)
                                .addFields(
                                    {name : 'Score', value : animeData[9].score.toString(), inline : true},
                                    {name : 'Release Date', value : animeData[9].releaseDate, inline : true},
                                )
                                .setDescription(animeData[9].synopsis).setImage(animeData[9].image);
                                await interaction.update({ embeds: [embed] });
                        }
                        if (interaction.customId == 'backToList'){
                            let list = animeTitles.join(`\n`);
                            const embed = new EmbedBuilder()
                                .setColor('#2e51a2')
                                .setTitle(`Here's your top 10 Matching Results for ${animeName}, and please pick a number for the details of the anime.`)
                                .setDescription(list);
                            await interaction.update({ embeds: [embed] });
                        }
                    } catch (error) {
                        console.error(error)
                       await interaction.update('something went wrong during update process')
                    }
            })
            } catch (error) {
                console.error(error);
               await interaction.reply('An error occurred while fetching anime data.');
            }
        }
    }