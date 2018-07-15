const Discord = require("discord.js");
const client = new Discord.Client();
var opusscript = require("opusscript");
const sql = require("sqlite");
sql.open("./score.sqlite");

client.on("ready", () => {
  console.log("I am ready!");
    client.user.setStatus("online");
    client.user.setActivity('my guitar! chakakaka');
});

prefix = "!";
client.on("message", (message) => {
    if (message.channel.type == "dm") return;
    if (!message.guild) return;
    
    if (message.content === (prefix + "chili")) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          const dispatcher = connection.playFile("./sounds/welcome_to_chilis.mp3");
          client.leaveVoiceChannel(message.member.voiceState.channelID);
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
    
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
        if (!row) {
            sql.run("INSERT INTO scores (userId, points, level) VALUES (?,?,?)", [message.author.id, 1, 0]);
        } else {
            row.points++
            let curLevel = Math.floor(0.1 * Math.sqrt(row.points));
            if (curLevel > row.level) {
                row.level = curLevel
                sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
                message.reply(`owo it looks like you've reached level **${curLevel}**! You derserve a pat`);
            } else if (row.points == 2500 && row.level == 5) {
                message.reply("Congrats! You've earned the role OwO Member. Please let either the owner or moderators know of your achievement OwO");
            } else if ( row.points == 1000 && row.level == 10) {
                message.reply("Congrats! You've earned the role Popular in OwO. Please let either the owner or moderators know of your achievement OwO");
            } else if ( row.points == 22500 && row.level == 15) {
                message.reply("Congrats! You've earned the role Kind of a Big Deal OwO. Please let either the owner or moderators know of your achievement OwO");
            } else if ( row.points == 40000 && row.level == 20) {
                message.reply("Congrats! You've earned the role OwO VIP. Please let either the owner or moderators know of your achievement OwO");
            } else if ( row.points == 625000 && row.level == 25) {
                message.reply("Congrats! You've earned the role Superstar OwO. Please let either the owner or moderators know of your achievement OwO");
            } else if ( row.points == 90000 && row.level == 30) {
                message.reply("Congrats! You've earned the highest spot in our ranks, OwO Boss!!! Please let either the owner or moderators know of your achievement OwO");
            }
            sql.run(`UPDATE scores SET points = ${row.points} WHERE userId = ${message.author.id}`);
        }
    }).catch(() => {
        console.error;
        sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
            sql.run("INSERT INTO scores (userId, points, level) VALUES (?,?,?)", [message.author.id, 1, 0]);
        });
    });
    
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
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
              description: "my prefix is !",
              fields: [
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
                     name: "level",
                     value: "Shows your level in this server"
                 },
                       {
                           name: "points",
                           value: "Shows how many points you have"
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
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    if (message.content.startsWith(prefix + "level")) {
        sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
            if (!row) return message.reply("Oh no! Your current level is 0!");
            message.reply(`Ta da! Your current level is ${row.level}`);
            
        });
    } else
        if (message.content.startsWith(prefix + "points")) {
            sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
                if (!row) return message.reply("uwu it looks like you don't have any points :(");
                message.reply(`owo it looks like you have ${row.points} points, fight-o!`);
            });
        }
});

client.login(process.env.BOT_TOKEN);
