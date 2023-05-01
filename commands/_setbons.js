/*CMD
  command: /setbons
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
var key2 = [[{title:"✅ Turn On",command:"/bonOn"},{title:"🛑 Turn OFF",command:"/bonOFF"}],[{title:"🎰 Set Bonus amount",command:"/setbonam"}]]
var k = Bot.getProperty("BON")
if (user.telegramid == 1980006765){
Bot.sendInlineKeyboard(key2,"*🎁 Bonus Button is currently* : " +k)
}else{
return
}

