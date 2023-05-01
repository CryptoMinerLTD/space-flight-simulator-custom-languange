/*CMD
  command: HIST
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🗂 history
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
var his = User.getProperty("history")
if(his == undefined){
var go ="*🗂 Transactions History*"+ "\n_Here you can find the last 15 transactions related to your account_";
Bot.sendMessage(go)
}else{
Bot.sendMessage("*🗂 Transactions History*" +"\n\n_Here you can find the last 15 transactions related to your account_"+"\n\n"+his)
}
