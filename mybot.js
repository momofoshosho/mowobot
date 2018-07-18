const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const express = require("express");


client.on("ready", () => {
  console.log("I am ready!");
    client.user.setStatus("online");
    client.user.setActivity('my guitar! chakakaka');
});

prefix = "!";
client.on("message", (message) => {
    if (message.channel.type == "dm") return;
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
    if (message.content.startsWith(prefix + "boop")) {
      const boopimgs = [
        './images/boop1.gif',
        './images/boop2.gif',
        './images/boop3.gif',
        './images/boop4.gif',
        './images/boop5.gif',
        './images/boop6.gif',
        './images/boop7.gif',
        './images/boop8.gif'
      ]
      var rand = boopimgs[Math.floor(Math.random() * boopimgs.length)];
      var randboop = boopimgs[rand]
      message.channel.send("Boop!", {files: [randboop]});
  } else
    
  if (message.content.startsWith("lesbians")) {
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
                },
                 {
                   name: "boop",
                   value: "*sending boop*"
                 }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL,
                text: "© Yui Senpai"
            }
        }
     });
    }
});
client.login(process.env.BOT_TOKEN);
