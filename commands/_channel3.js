/*CMD
  command: /channel3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📦 *Send Channel 3 Username with @ :*

Example : @VieraUpdate
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid== 1980006765){
Bot.setProperty("channel3",message, "params");
Bot.sendMessage("✅ Channel 3 " +message+ " Has Been Set");
}else{
return
}

