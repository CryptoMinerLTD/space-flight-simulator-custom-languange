/*CMD
  command: /mindepos
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
➡️ *Send amount of Minimum withdraw in Bot :*


➡️ Eaxmple : *1* (0.00000010) or *10* (0.0000010)
  ANSWER
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == 1980006765){
Bot.setProperty("Minw",message, "integer");
Bot.sendMessage("✅ *Minimum Deposit in Bot set to* " +message)
}else{
return
}

