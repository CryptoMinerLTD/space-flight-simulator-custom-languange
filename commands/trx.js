/*CMD
  command: trx
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
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
var x = Bot.getProperty("Minw")
var y = x/10000000
let res = Libs.ResourcesLib.userRes("balance");
if(res.value() < y ){
Bot.sendMessage("*❌ Minimum amount to withdraw* " +y.toFixed(8)+ " *LTC*")
}else{
Bot.sendKeyboard("⛔️ Cancel","📤 _How many LTC you want to withdraw?_\n\nMinimum: " +y.toFixed(8)+ " LTC"+"\n"+"Maximum: `"+res.value().toFixed(8)+"`\n"+" _Maximum amount corresponds to your balance_"+"\n\n"+"➡️ _Send now the amount of  you want to withdraw_")
Bot.runCommand("/withBTT1")
}
