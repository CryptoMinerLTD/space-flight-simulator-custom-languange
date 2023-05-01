/*CMD
  command: /global
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Input Message to Broadcast :
  keyboard: 
  aliases: 
CMD*/

if(user.telegramid == "1980006765"){
Bot.runAll({ 
command: "global",
for_chats: "private-chats",
options: {msg: message}
})
}else{
Bot.sendMessage("*🔰 You're Not An Admin*")
}
