/*CMD
  command: /setbonam
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Send the amount for Daily Bonus :

➡️ Eaxmple : *1* (0.0000010) or *10* (0.00000100)
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid== 1980006765){
Bot.setProperty("Bonu" , message , "integer");
Bot.sendMessage("*🎁 Daily Bonus Set to* " +message);
}else{
return
}

