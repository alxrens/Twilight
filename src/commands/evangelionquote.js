const quotes = [
    {
      "quote": "Humans cannot create anything out of nothingness. Humans cannot accomplish anything without holding onto something. After all, humans are not gods.",
      "author": "Kaworu Nagisa"
    },
    {
      "quote": "The fact that you have a place where you can return home will lead you to happiness. That is a good fact.",
      "author": "Kaworu Nagisa"
    },
    {
      "quote": "I still don’t know where to find happiness. But I’ll continue to think about whether it’s good to be here…whether it was good to have been born. But in the end, it’s just realizing the obvious over and over again. Because I am myself.",
      "author": "Shinji Ikari"
    },
    {
      "quote": "No one can justify life by linking happy moments into a rosary.",
      "author": "Shinji Ikari"
    },
    {
      "quote": "This is man's ultimate fighting machine, the synthetic life form known as Evangelion, Unit 1. Built here in secret, it is mankind’s last hope.",
      "author": "Ritsuko Akagi"
    },
    {
      "quote": "This city is a fortress designed to stand against the angels. This is Tokyo3, this is our city and it’s the city that you saved.",
      "author": "Misato Katsuragi"
    },
    {
      "quote": "Even though a hedgehog may want to become close with another hedgehog. The closer they get, the more they injure each other with their spines.",
      "author": "Ritsuko Akagi"
    },
    {
      "quote": "My mind is being eaten away…Kaji-san, it’s unraveling my mind! What do I do? It’s defiling my mind.",
      "author": "Asuka Langley"
    },
    {
      "quote": "Anywhere can be paradise as long as you have the will to live. After all, you are alive, so you will always have the chance to be happy.",
      "author": "Yui Ikari"
    },
    {
      "quote": "I didn’t have a choice! They made me pilot the stupid thing!",
      "author": "Shinji Ikari"
    },
    {
      "quote": "I mustn’t run away! I mustn’t run away! I mustn’t run away!",
      "author": "Shinji Ikari"
    },
    {
      "quote": "If getting into the Eva means nothing but pain to him, I don’t think he should pilot again. Ugh, otherwise he’ll be killed.",
      "author": "Misato Katsuragi"
    },
    {
      "quote": "Mankind’s greatest fear is Mankind itself.",
      "author": "Gendo Ikari"
    },
    {
      "quote": "Man cannot erase this sadness because all men are fundamentally alone.",
      "author": "Kaworu Nagisa"
    },
    {
      "quote": "As long as the Sun, the Moon, and the Earth exist, everything will be all right.",
      "author": "Yui Ikari"
    },
    {
      "quote": "If you know pain and hardship, it’s easier to be kind to others.",
      "author": "Ryoji Kaji"
    },
    {
      "quote": "It is simply the duty of the elite to protect the ignorant masses.",
      "author": "Asuka Langley"
    },
    {
      "quote": "Whether I live or die makes no great difference. In truth, death may be the only absolute freedom there is.",
      "author": "Kaworu Nagisa"
    },
    {
      "quote": "Exactly why did you come here? You mustn't run away, you must confront your father, and you must confront yourself!",
      "author": "Ritsuko Akagi"
    },
    {
      "quote": "Are you afraid of other people? I know that by keeping others at a distance you avoid a betrayal of your trust, for while you may not be hurt that way, you mustn't forget that you must endure the loneliness.",
      "author": "Kaworu Nagisa"
    },
    {
      "quote": "Man fears the darkness, and so he scrapes away at the edges of it with fire.",
      "author": "Rei Ayanami"
    },
    {
      "quote": "The thread of human hope is spun with the flax of sorrow.",
      "author": "Kaworu Nagisa"
    },
    {
      "quote": "Your truth can be changed simply by the way you accept it. That's how fragile the truth for a human is.",
      "author": "Kozo Fuyutsuki"
    },
    {
      "quote": "Sometimes you need a little wishful thinking just to keep on living.",
      "author": "Misato Katsuragi"
    },
    {
      "quote": "Pain is something man must carry in his heart, and since the heart feels pain so easily, some believe that life is pain.",
      "author": "Kaworu Nagisa"
    },
    {
      "quote": "I’m the one who deserved to be hit. Not you! I’m a coward. I’m dishonest. I’m sneaky. And a wimp!",
      "author": "Shinji Ikari"
    },
    {
      "quote": "Living alone is fine with me. I’m alone anyway.",
      "author": "Shinji Ikari"
    },
    {
      "quote": "God knows I'm not perfect, either. I've made tons of stupid mistakes, and later I regretted them. And I've done it over and over again, thousands of times; a cycle of hollow joy and vicious self-hatred. But even so, every time I learned something about myself.",
      "author": "Misato Katsuragi"
    },
    {
      "quote": "Never underestimate the ability of the human animal to adapt to its environment.",
      "author": "Misato Katsuragi"
    },
    {
      "quote": "One who truly hates himself cannot love; he cannot place his trust in another.",
      "author": "Rei Ayanami"
    }
  ]

  const evangelionImage = [
    "https://wiki.evageeks.org/images/2/2a/25%27_title2_theatrical.jpg",
    "https://wiki.evageeks.org/images/thumb/2/27/26%27_title2_video.jpg/1200px-26%27_title2_video.jpg",
    "https://static.wikia.nocookie.net/evangelion/images/6/65/NGE01_71.png/revision/latest/scale-to-width-down/1000?cb=20190901082549",
    "https://static.wikia.nocookie.net/evangelion/images/b/b3/NGE02_68.png/revision/latest?cb=20190930060126",
    "https://i.pinimg.com/originals/0e/ae/0e/0eae0eed87530575edaaebdbe8c103d0.png",
    "https://i.pinimg.com/736x/8d/03/cc/8d03cc298b5067888f83730a47783995.jpg",
    `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98394c76-095d-45fc-a2bb-f4e0b540ccce/dag88om-44c0b742-d505-4175-9180-fec55409f1a3.png/v1/fill/w_1192,h_670,q_70,strp/neon_genesis_evangelion_episode_5_by_thereuplord_dag88om-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzk4Mzk0Yzc2LTA5NWQtNDVmYy1hMmJiLWY0ZTBiNTQwY2NjZVwvZGFnODhvbS00NGMwYjc0Mi1kNTA1LTQxNzUtOTE4MC1mZWM1NTQwOWYxYTMucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ItRGPxjwbL9GYuzSCR3T1OhgVczI8Vpx0Z6GJhl8_sg`
    `https://i.pinimg.com/736x/1f/41/d4/1f41d456d0a6c8b8e67708a31ee02556.jpg`,
    `https://i.pinimg.com/originals/2c/4b/97/2c4b97d5e4afa9a89174cba863c71540.png`,
    `https://i.pinimg.com/originals/62/0c/a4/620ca47488590018551a66f91c4128a8.png`,
    `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98394c76-095d-45fc-a2bb-f4e0b540ccce/dag8943-ae1478f3-1064-463d-8c3d-ab2b3397b8bc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk4Mzk0Yzc2LTA5NWQtNDVmYy1hMmJiLWY0ZTBiNTQwY2NjZVwvZGFnODk0My1hZTE0NzhmMy0xMDY0LTQ2M2QtOGMzZC1hYjJiMzM5N2I4YmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TvYD4aOnILdW9tPJbXYBlx900XBlWfnCg8A5179xuy0`,
    `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98394c76-095d-45fc-a2bb-f4e0b540ccce/dag899o-5cb1a324-ac35-4384-aff1-9658bf476bba.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk4Mzk0Yzc2LTA5NWQtNDVmYy1hMmJiLWY0ZTBiNTQwY2NjZVwvZGFnODk5by01Y2IxYTMyNC1hYzM1LTQzODQtYWZmMS05NjU4YmY0NzZiYmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4uoyMp4ZtjSnN0bGn3uDXgU8gSt276m_4iIRg7_DnE0`,
    `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98394c76-095d-45fc-a2bb-f4e0b540ccce/dag89fv-1d16792f-f19b-4be1-b9be-f18514d77809.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk4Mzk0Yzc2LTA5NWQtNDVmYy1hMmJiLWY0ZTBiNTQwY2NjZVwvZGFnODlmdi0xZDE2NzkyZi1mMTliLTRiZTEtYjliZS1mMTg1MTRkNzc4MDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PoyrFNqTEogVHZ9RI3oxxaL5ZGFypwZK0DUZc8Lrnuo`,
    `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98394c76-095d-45fc-a2bb-f4e0b540ccce/dag89mu-3f084a1f-5cb0-4d7c-857e-e2ba0b8214f9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk4Mzk0Yzc2LTA5NWQtNDVmYy1hMmJiLWY0ZTBiNTQwY2NjZVwvZGFnODltdS0zZjA4NGExZi01Y2IwLTRkN2MtODU3ZS1lMmJhMGI4MjE0ZjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qqwWeAnUwSYB1IJgMiAwSZb5mWCL85fveUIvRIm0ILg`,
    `https://i.pinimg.com/736x/8d/34/bd/8d34bdaa6b16812c601c33a3dbb30584.jpg`,
    `https://i.pinimg.com/originals/8e/8e/9d/8e8e9de6505108746ed1f636e0b72f3a.png`,
    `https://preview.redd.it/ax4hntjphc081.jpg?width=640&crop=smart&auto=webp&s=f6d0dabd40e429894bb6bfa26f18db651852bc95`,
    


]
  const { SlashCommandBuilder } = require("discord.js")
  module.exports = {
    data : new SlashCommandBuilder()
        .setName('evangelionquote').setDescription('angel is dead, but you can still live'),
    async execute(interaction){
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        interaction.reply(`${quote.quote} - ${quote.author}`);
    }
}