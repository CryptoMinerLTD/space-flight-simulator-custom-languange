/*CMD
  command: 💰
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
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
let res = Libs.ResourcesLib.userRes("balance");
let withdraw = Libs.ResourcesLib.userRes("withdraw");
var x = [[{title:"🔄 Refresh",command:"/mains2"}]]
Bot.sendKeyboard("💰 Balance : " +res.value().toFixed(8)+ " LTC,\n🔋 Referral,🎁 Bonus,⛔️ Withdraw,\n💳 Set Email,📊 Status,🗂 History,\n💹 Earn More","*💹 Balance : * " +res.value().toFixed(8) + " *LTC*" + "\n\n",{disable_web_page_preview : true});
