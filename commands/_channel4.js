/*CMD
  command: /channel4
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📦 *Send Channel 4 Username with @ :*

Example : @VieraUpdate
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid== 1980006765){
Bot.setProperty("channel4",message, "params");
Bot.sendMessage("✅ Channel 4 " +message+ " Has Been Set");
}else{
return
}

