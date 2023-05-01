/*CMD
  command: /botstoPon
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
var key2 = [[{title:"✅ Turn On",command:"/botson"},{title:"🛑 Turn OFF",command:"/botofF"}]]
var k = Bot.getProperty("BOT")
if (user.telegramid == 1980006765){
Bot.sendInlineKeyboard(key2,"🔌 *Bot is currenctly* : " +k)
}else{
return
}

