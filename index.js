const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord

//status
bot.status({
  text: "Aina -  とてもかわいい !",
  type: "PLAYING",
  url: "https://www.youtube.com/c/BeingYT",
});
//Events
