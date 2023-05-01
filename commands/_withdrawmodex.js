/*CMD
  command: /withdrawmodex
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
var key2 = [[{title:"✅ Turn On",command:"/manumode"},{title:"🛑 Turn OFF",command:"/manuoff"}]]
var k = Bot.getProperty("manual")
if (user.telegramid == 1980006765){
Bot.sendInlineKeyboard(key2,"*Manual Withdraw is currently* : " +k)
}else{
return
}

