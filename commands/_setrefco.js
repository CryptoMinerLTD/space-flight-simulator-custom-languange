/*CMD
  command: /setrefco
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Send the amount for referral invite

➡️ Eaxmple : *1* (0.0000010) or *10* (0.00000100)
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid== 1980006765){
Bot.setProperty("refcomi" , message , "params");
Bot.sendMessage("✅ Referral Bonus Set to " +message);
}else{
return
}

