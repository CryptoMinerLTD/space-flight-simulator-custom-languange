/*CMD
  command: /STAT
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📊 status
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
let deposit = Libs.ResourcesLib.userRes("deposit");
let withdraw = Libs.ResourcesLib.userRes("withdraw");
let currency = "LTC" // Set Your Currency
let userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global");
let tota = Libs.ResourcesLib.anotherChatRes("tota", "global")
let bonn = Libs.ResourcesLib.anotherChatRes("bonn", "global")
let x = Bot.getProperty("Minw")
let z = x/10000000
let key = Bot.getProperty("refcomi")
var yy = key/10000000
Bot.sendMessage("*🖥 Total users :* *" +tota.value().toFixed()+ "* *Users* " + "\n*📤 Total Withdrawan : * *" +userPayment.value().toFixed(8)+ "*\n\n*💹 Minimum Withdraw : * *" +z.toFixed(8)+ "* *LTC* " + "\n*🎁 Referral Bonus : * *" +yy+ "* *LTC*")
