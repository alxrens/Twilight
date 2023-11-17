const { ButtonBuilder, ActionRowBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder, ButtonStyle, ComponentType, GuildB } = require("discord.js");
const axios = require('axios').default;
const password = require('../../config/config.json').password;
const bcrypt = require('bcrypt');
const saltRound = 10;


module.exports = {
    data : new SlashCommandBuilder()
    .setName('moderate').setDescription('moderate someone in your server')
    .addUserOption(option => {
        return option.setName('target')
        .setDescription('put the person you wnat to moderate')
        .setRequired(true)
    }).addStringOption(option => {
        return option.setName('passkey')
        .setDescription('input the password for moderation')
        .setRequired(false)
    }).addStringOption(option => {
        return option.setName('reason')
        .setDescription('put the reason for moderation')
        .setRequired(false)
    }),
    async execute(interaction) {
        if(interaction.user.tag != 'nekosushi') return interaction.reply('you can\'t use this command');
        const target = interaction.options.getUser('target');
        const guild = interaction.guild;
        const reason = interaction.options.getString('reason') || "No reason provided";
        const passkey = interaction.options.getString('passkey');

        const verifyPass = await bcrypt.compare(passkey, password);
        if(!verifyPass) return interaction.reply('Wrong password');

        const confirmation = new ButtonBuilder()
        .setCustomId('confirm')
        .setLabel('Confirm Ban')
        .setStyle(ButtonStyle.Danger).setDisabled(false);

        const cancel = new ButtonBuilder()
			.setCustomId('cancel')
			.setLabel('Cancel')
			.setStyle(ButtonStyle.Secondary).setDisabled(false);

        const timeOut = new ButtonBuilder()
        .setCustomId('timeout')
        .setLabel('Timeout')
        .setStyle(ButtonStyle.Success).setDisabled(false);

        const warn = new ButtonBuilder()
        .setCustomId('warn')
        .setLabel('Warn')
        .setStyle(ButtonStyle.Primary).setDisabled(false);

        const row = new ActionRowBuilder().addComponents(cancel, confirmation, timeOut, warn);
        const message = await interaction.reply({ content: `how do you want to moderate ${target}?`, components: [row] });

        const filter = (i) => i.user.id === interaction.user.id;
        const collector =  interaction.channel.createMessageComponentCollector({
            componentType: ComponentType.Button,
            filter
        });

        collector.on('collect', async (interaction) => {
            if(interaction.customId === 'confirm') {
                if (reason) {
                    guild.members.ban(user);
                return interaction.reply(`banned ${target} for ${reason}`);
                } else {
                    guild.members.ban(user);
                    return interaction.reply(`banned ${target}`);
                }
                
            }
            if(interaction.customId === 'cancel') {
                return interaction.reply('canceled moderation');
            }
            if(interaction.customId === 'timeout') {
                if (reason) {
                    target.timeout(3000, reason);
                    return interaction.reply(`timed out ${target} for ${reason}`);
                } else {
                    target.timeout(3000, reason);
                    return interaction.reply(`timed out ${target}`);
                }
            }
            if(interaction.customId === 'warn') {
                row.components[3].setDisabled(true);
                    let res = await axios.get("https://evilinsult.com/generate_insult.php?lang=en&type=plaintext")
                const result = res.data;
                return interaction.reply(`Hey ${target}, ${result} Oh yeah and stop being a little bitch ruining party for everyone. This is a warning before you get banned!`);
            }
        })
    }
}