/*CMD
  command: /earnm
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 💹 earn more
CMD*/

let res = Libs.ResourcesLib.userRes("balance");
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
var key2 = Bot.getProperty("earn")
Bot.sendKeyboard("💰 Balance : " +res.value().toFixed(8)+ " LTC,\n🔋 Referral,🎁 Bonus,⛔️ Withdraw,\n💳 Set Email,📊 Status,🗂 History,\n💹 Earn More",
  "\n"+key2
)

