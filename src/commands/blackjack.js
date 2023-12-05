const { SlashCommandBuilder } = require("discord.js");
const BlackJack = require('../function/blackjack');

const { ButtonBuilder, ActionRowBuilder, ComponentType, ButtonStyle } = require("@discordjs/builders");

const games = new Map();

module.exports = {
    data: new SlashCommandBuilder()
        .setName("blackjack(onprogress)").setDescription("play blackjack now!!"),
        async execute(interaction) {
            if(!interaction.isCommand()) return;
            
            const { commandName } = interaction;

            if (commandName === "blackJack") {
                if(!Gamepad.has(interaction.channel.id)){
                    games.set(interaction.channel.id, {players : {}});
                    }
            }

            const player = interaction.user;
            const gameData = games.get(interaction.channel.id);

            if(gameData.players[player.id]){
                await interaction.reply("You are already in the game. Finish that game first before you can start a new one.");
                return;
            }

            const game = new BlackJack();
            gameData.player[player.id] = {game, channel : interaction.chanel.id, playerHand : []};

            let hit = new ButtonBuilder()
            .setCustomId("hit")
            .setLabel("Hit")
            .setStyle(ButtonStyle.Danger);

            let stand = new ButtonBuilder()
                .setCustomId("stand")
                .setLabel("Stand")
                .setStyle(ButtonStyle.Success);
            
            let row = new ActionRowBuilder().addComponents(hit, stand);

            await interaction.reply({content : "Black Jack Started!!", components : [row]});
            game.displayGame(interaction.channel, gameData);

            const collector = interaction.channel.createMessageComponentCollector({
                ComponentType : ComponentType.Button,
            })

            await collector.once('collect', async (interaction) => {
                try {
                    if(interaction.customId === 'hit'){
                        gameData.players[player.id].playerHand.push(game.deck.pop());
                        game.displayGame(interaction.channel, gameData);
                        if (game.calculateHandValue(gameData.players[player.id].playerHand) > 21) {
                            game.endGame(interaction.channel, 'Bust! You went over 21. Dealer wins.', gameData)
                            
                        } else if (game.isBlackjack(gameData.players[player.id].playerHand)){
                            game.endGame(interaction.channel, 'Congratulations! You have Blackjack!', gameData);
                        }
                    }else if (customId === 'stand') {
                        game.playerTurn = false;
                        game.checkEndGame(interaction.channel, gameData);
                    }
                } catch (error) {
                    
                }
            })


        }
};