const Discord = require("discord.js");
const bot = new Discord.Client();

const TOKEN = "MjY4MzY5NjE2MDQzMTE0NTA3.DE-qqA.drGawSz-Jofl0COmPtzpTphkCzI"

bot.on('ready', () => {
  console.log("SELF BOT IS ONLINE NOW")
  bot.user.setGame(`Schizophrenia`,"http://twitch.tv/163316")
  bot.user.setStatus("dnd")
});
bot.on('guildMemberAdd', member => {
  member.send(" + لو موجود فانت منورنا ولو مش موجود ممكن تنورنا سيرفر مصر لكل العرب للجيمنج والسولفة : اول فيديو للقناة  https://youtu.be/j9ftwOakkmQ https://discord.gg/Y3eR3Wq ")
});
bot.on('message', message => {
  let args = message.content.split(" ").slice(1);

    if(message.content === "-_-") {
      message.reply(":stuck_out_tongue_winking_eye: يا رخم شبهك علي فكرة")
}
if(message.content === "باك") {
  message.reply(":kissing_heart: ولكم ياعسل")
}
if(message.content === "السلام عليكم") {
  message.reply("وعليكم السلام");
}
if(message.content === "سلام") {
  message.reply("سلام")
}
if(message.content === "<@268369616043114507> عامل اية") {
  message.reply(":kissing_heart: الحمدلله")
}
if(message.content === "<@268369616043114507> ازيك") {
  message.reply(":kissing_heart: الحمدلله")
}

});

bot.login("MjY4MzY5NjE2MDQzMTE0NTA3.DE-qqA.drGawSz-Jofl0COmPtzpTphkCzI")
