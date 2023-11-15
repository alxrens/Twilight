const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const axios = require('axios').default;


const tags = []
const toss = []
let uri = `https://api.waifu.im/search?included_tags=waifu`
const availableTags = axios.get('https://api.waifu.im/tags').then((res) => {
    const versatile = res.data.versatile;
    const nsfw = res.data.nsfw;
    for (let i = 0; i < versatile.length; i++) {
        if (versatile[i] == 'marin-kitagawa' || versatile[i] == 'raiden-shogun' || versatile[i] == 'mori-calliope') {
            toss.push(versatile[i])
        } else {
            // tags.push(versatile[i])
            tags.push({name : versatile[i], value : versatile[i]});
        }
    }
    for (let i = 0; i < nsfw.length; i++) {
        const tag = tags.push({name:`(18++) ${nsfw[i]}` , value : nsfw[i]})
    }
    

    console.log(...tags)
    
})
axios.get(`https://api.waifu.im/search?included_tags=waifu`).then((res) => {
    const result = res.data.images[0].url;
    console.log(result)
})
