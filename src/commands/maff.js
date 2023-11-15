const { SlashCommandBuilder } = require("@discordjs/builders");


module.exports = {
    data : new SlashCommandBuilder()
            .setName("maff").setDescription("Do maff stuff :|")
            .addIntegerOption(option => 
                option.setName("first_number").
                setDescription('input your first number')
                .setRequired(true))
                .addStringOption(option => 
                    option.setName("equation").
                    setDescription('what would you like to do with this two number?')
                    .setRequired(true).addChoices(
                        {name : "add", value : "add"},
                        {name : "subtract", value : "subtract"},
                        {name : "multiply", value : "multiply"},
                        {name : "divide", value : "divide"}
                        )
                    
                    ).addIntegerOption(option => option.setName('second_number')
                    .setDescription('input your second number').setRequired(true))
                    
            ,
            async execute(interaction){
                const first_number = interaction.options.getInteger("first_number");
                const equation = interaction.options.getString("equation");
                const second_number = interaction.options.getInteger("second_number");
                if (first_number == null || second_number == null) {
                    await interaction.reply("please input your first number and second number")
                    
                }
                if (first_number > 1000000000000000 || second_number > 1000000000000000) {
                    await interaction.reply("limit of inputed number is 1000000000000000 otherwise you'll break discord");
                    
                }
                if(equation == "add"){
                    await interaction.reply(`${first_number} + ${second_number} = ${parseInt(first_number) + parseInt(second_number)}`)
                }else if(equation == "subtract"){
                    await interaction.reply(`${first_number} - ${second_number} = ${parseInt(first_number) - parseInt(second_number)}`)
                }else if(equation == "multiply"){
                    await interaction.reply(`${first_number} * ${second_number} = ${parseInt(first_number) * parseInt(second_number)}`)
                }else if(equation == "divide"){
                    await interaction.reply(`${first_number} / ${second_number} = ${parseInt(first_number) / parseInt(second_number)}`)
                }
            }
}