const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
    client.user.setStatus("online");
    client.user.setActivity('my guitar! chakakaka');
});

prefix = "!";
client.on("message", (message) => {
    if (message.channel.type == "dm") return;
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
  if (message.content.startsWith(prefix + "boop")) {
    message.channel.send("boop boop!");
      
  } if (message.content.startsWith("lesbians")) {
     message.channel.send("owo are we talking about lesbians? Mowogen and Ken *love* talking about lesbians!");
   } else 
    
    if (message.content.startsWith("ant is a hoe")) {
      message.channel.send("you're damn right! >.<");
    } else

  if (message.content.startsWith(prefix + "owo")) {
    message.channel.send("OwO What's This?");
  } else
      if (message.content.startsWith(prefix + "help")) {
          message.channel.send({embed: {
              author: {
                  name: client.user.username,
                  icon_url: client.user.avatarURL
              },
              title: "Look at what I can do!",
              description: "my default prefix is !",
              fields: [{
                  name: "prefix",
                  value: "Get my attention with something else :3"
                },
                  {
                  name: "ping",
                  value: "Check out my response time >.<"
                },
                  {
                      name: "help",
                      value: "what? you already know what this does"
                  },
                  {
                      name: "owo",
                      value: "*sees buldge*"
                  }
              ],
              timestamp: new Date(),
              footer: {
                  icon_url: client.user.avatarURL,
                  text: "© Mowobot"
              }
          }
       });
      }
});
client.login(process.env.BOT_TOKEN);
