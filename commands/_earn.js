/*CMD
  command: /earn
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📦 *Send Me earn more text :*

  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid== 1980006765){
Bot.setProperty("earn",message, "string");
Bot.sendMessage("Earn more text " +message+ " Has Been Set");
}else{
return
}

