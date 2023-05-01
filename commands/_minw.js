/*CMD
  command: /minw
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ➡️ *Send amount of Minimum withdraw in Bot :*
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == 1980006765){
let msg = message;
Bot.setProperty("Minw", msg, "integer");
Bot.sendMessage("✅ *Minimum withdraw in Bot set to* " +message)
}else{
return
}

