const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const express = require("express");


client.on("ready", () => {
  console.log("I am ready!");
    client.user.setStatus("online");
    client.user.setActivity("mind games");
});

prefix = "!";
client.on("message", (message) => {
    if (message.channel.type == "dm") return;
    
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
        message.channel.send('*boop*!', {
          file: boopimgs[Math.floor(Math.random() * boopimgs.length)]
        });
  } else
    
  if (message.content.includes("lesbian") && !message.author.bot) {
     message.channel.send(":eyes: oh?");
   } else

  if (message.content.startsWith(prefix + "owo")) {
    message.channel.send("OwO What's This?");
  } else
    if (message.content.startsWith(prefix + "prefix")) {
      message.channel.send("baka...it's ! .. but you already knew that :eyes:");
    } else
    if (message.content.startsWith(prefix + "rate")) {
        let ratus = message.mentions.members.first();
        if(!ratus) return message.channel.send("Baka! Who am I rating??");
        let rates = ["1 .. ouch", "2", "3", "4", "5 hey you're just okay", "6", "7", "8", "9", "10 *wow oh wow* ;D"];
        let result = String(Math.floor((Math.random() * rates.length)));
  
        if(ratus.user.id === message.author.id) {
         return message.channel.send("**" + message.author.toString() + "** , I'd give you " + result + "/10 :rindo:");
        } else return message.channel.send("I'd give **_" + ratus + "_** " +  result + "/10 :rindo:");
      }
      else
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
                value: "It's ! and ***only*** this !!!!!!!!"
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
  if (!message.content.startsWith(prefix) || message.author.bot) return;
});
client.login(process.env.BOT_TOKEN);
