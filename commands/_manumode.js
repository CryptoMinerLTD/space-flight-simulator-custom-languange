/*CMD
  command: /manumode
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}
var key = Bot.getProperty("admin_chat")
if (user.telegramid== 1980006765){
Bot.setProperty("manual" ,"✅ Turned On","string")
Bot.runCommand("/withdrawmodex")
}else{
return
}

