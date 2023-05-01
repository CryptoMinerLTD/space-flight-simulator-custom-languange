/*CMD
  command: /channels
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid== 1980006765){
var key = [[{title:"Channel 1",command:"/channel1"},{title:"Channel 2",command:"/channel2"}],[{title:"Channel 3",command:"/channel3"},{title:"Channel 4",command:"/channel4"},{title:"Channel 5",command:"/channel5"}]]
Bot.sendInlineKeyboard(key,"You need to set all 5 channels")
}else{
return
}
