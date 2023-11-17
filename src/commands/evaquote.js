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

  const { SlashCommandBuilder } = require("discord.js");
  const axios = require('axios').default;
  module.exports = {
    data : new SlashCommandBuilder()
        .setName('evaquote').setDescription('angel is dead, but you can still live'),
    async execute(interaction){
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        interaction.reply(`${quote.quote} - ${quote.author}`);
    }
}