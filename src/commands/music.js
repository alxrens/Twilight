const { ButtonBuilder, ActionRowBuilder} = require("@discordjs/builders")
const { SlashCommandBuilder, EmbedBuilder, ComponentType, ButtonStyle} = require("discord.js");
let musicController = require('../function/music-info');

require('dotenv').config();

module.exports = {
    data : new SlashCommandBuilder()
        .setName("musicinfo").setDescription("Get music info")
        .addStringOption(
            option => option
                .setName("song")
                .setDescription("Name of the song")
                .setRequired(false)
        ).addStringOption(
            option => option
                .setName("artist")
                .setDescription("Name of the artist")
                .setRequired(false)
        ),
        async execute(interaction) {
            const song = interaction.options.getString("song");
            const artist = interaction.options.getString("artist");

            if(song && artist) return interaction.reply("searching both song and artist at the same time is currently not supported, please be patient");

            if(song) {
                return interaction.reply("Sorry, song option is currently not available/under development");
            }

            if (artist) {
                let searchResult = await musicController.searchArtist(artist);
                let artist_name = [];
                let buttons = [];
                for (let i = 0; i < searchResult.length; i++) {
                    artist_name.push(`${i+1}. ${searchResult[i].artist_name}`)
                    
                    let button = new ButtonBuilder()
                    .setCustomId(`${i+1}`)
                    .setLabel(`${i+1}`)
                    .setStyle(ButtonStyle.Secondary);

                    buttons.push(button);
                }

                let comp= []
                for (let i = 0; i < buttons.length; i+= 5) {
                    let row = new ActionRowBuilder().addComponents(buttons.slice(i, i+5));
                    comp.push(row)
                    
                }   
                let backToList = new ButtonBuilder()
                    .setCustomId("backToList")
                    .setLabel("Back to list")
                    .setStyle(ButtonStyle.Secondary);
                
                let row3 =new ActionRowBuilder().addComponents(backToList)

                comp.push(row3)
                
                const firstEmbed = new EmbedBuilder()
                .setColor("#1db954")
                .setTitle("Here is your matching results based on your input")
                .setDescription(artist_name.join("\n"))
                .setAuthor({
                    name : interaction.user.tag,
                    iconURL: interaction.user.displayAvatarURL()
                })
                .setFooter({text : "Data from Discogs"})
                interaction.reply({
                    embeds: [firstEmbed],
                    components : comp,
                    ephermal: true
                })
                const collector =  interaction.channel.createMessageComponentCollector({
                    componentType: ComponentType.Button,
                    time: 60 * 1000
                });

                collector.on("collect", async (interaction) => {
                    const id = interaction.customId;
                    if(!isNaN(id)){
                        const i = parseInt(id) - 1;
                        if (i >=0 && i < searchResult.length){
                            let aliases;
                            let song_name = [];
                            let result = await musicController.getArtistDetail(searchResult[i].artist_id);
                            for (let i = 0; i < result.releases.length; i++) {
                                const release = result.releases[i];
                                song_name.push(`${i+1} ${release.release_title}`)
                            }
                            if (result.aliases.length) {
                                aliases = result.aliases.join(", ")
                            }else {
                                aliases = "this artist has no aliases"
                            }
                            
                            const embed = new EmbedBuilder()
                            .setColor("#1db954")
                            .setTitle(result.artist_name)
                            .setDescription(result.profile)
                            .addFields({
                                name: "Recent Releases",
                                value: song_name.join(" ")
                            }, {
                                name : "Aliases",
                                value : aliases
                            })
                            .setImage(result.image)
                            .setAuthor({
                                name : interaction.user.tag,
                                iconURL: interaction.user.displayAvatarURL()
                            })
                            .setFooter({text : "Data from Discogs"})
                            await interaction.update({ embeds: [embed] });
                        }
                    }

                    if (interaction.setCustomId == "backToList") {
                        let embed = new EmbedBuilder()
                        .setColor("#1db954")
                        .setTitle("Here is your matching results based on your input")
                        .setDescription(artist_name.join("\n"))
                        .setAuthor({
                            name : interaction.user.tag,
                            iconURL: interaction.user.displayAvatarURL()
                        })
                        .setFooter({text : "Data from Discogs"})
                        interaction.update({
                            embeds: [embed],
                            components : comp
                        })
                    }
                })

                collector.on("end", async (collected) => {
                    await interaction.editReply({components : []})
                })

        }
    }
}