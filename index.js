const Discord = require('discord.js');
const client = new Discord.Client();


const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Bot is alive!');
});
server.listen(3000);

client.on('ready', () => {
  console.log(`Bot đã sẵn sàng: ${client.user.tag}`);
});

client.on('message', msg => {
  if (msg.content === 'ping') msg.reply('pong!');
});

client.login(process.env.TOKEN);
