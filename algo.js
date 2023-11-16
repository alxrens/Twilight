const Discord = require('discord.js');
const client = new Discord.Client();

// Sample text for training the Markov Chain
const sampleText = "This is a sample text. It can be used to train a Markov Chain text generator. The generator will then be able to produce new text based on the patterns it learned.";

// Function to generate a Markov Chain from the input text
function generateMarkovChain(text) {
  const words = text.split(' ');
  const markovChain = {};

  for (let i = 0; i < words.length - 1; i++) {
    const currentWord = words[i];
    const nextWord = words[i + 1];

    if (!markovChain[currentWord]) {
      markovChain[currentWord] = [];
    }

    markovChain[currentWord].push(nextWord);
  }

  return markovChain;
}

// Function to generate text based on the Markov Chain


client.on('message', (message) => {
  if (message.content === '!generateText') {
    // Generate Markov Chain from the sample text
    const markovChain = generateMarkovChain(sampleText);

    // Generate text starting from a random word
    const startingWord = Object.keys(markovChain)[Math.floor(Math.random() * Object.keys(markovChain).length)];
    const generatedText = generateText(markovChain, startingWord);

    // Send the generated text to the Discord channel
    message.channel.send(generatedText);
  }
});

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
client.login('YOUR_BOT_TOKEN');