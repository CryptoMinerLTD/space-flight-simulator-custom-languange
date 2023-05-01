/*CMD
  command: check9
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"1286702736");

if (stat=="ban"){
Bot.sendMessage("*You're Ban From Using The Bot ❌*");
}else{
var key = Bot.getProperty("channel5")
var channel = key;
var id = user.telegramid
Api.getChatMember({ 
chat_id : channel,
user_id : id,
on_result :"check10"})
}
