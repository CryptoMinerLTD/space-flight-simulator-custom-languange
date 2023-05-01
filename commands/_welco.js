/*CMD
  command: /welco
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📦 *Send Welcome Text :*

Example : Hi welcome
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid== 1980006765){
Bot.setProperty("welcom",message, "string");
Bot.sendMessage("✅ Welcome Text " +message+ " Has Been Set");
}else{
return
}

