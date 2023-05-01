/*CMD
  command: /trxw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ⛔️ withdraw
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently OFF*");
return
}

let wallet = User.getProperty("email")
if (wallet == undefined) {
  Bot.runCommand("/sete")
} else {
Bot.runCommand("trx")
}

