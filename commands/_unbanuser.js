/*CMD
  command: /unbanuser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send User ID to Unban :
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid== 1980006765){
Bot.setProperty(""+message+"" , "unban" , "string");
Bot.sendMessage("✅ User " +message+ " Has Been Unbanned");
}else{
return
}

