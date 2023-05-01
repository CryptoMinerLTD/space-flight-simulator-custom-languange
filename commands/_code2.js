/*CMD
  command: /code2
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
}
var id = message_id 
var x =[[{title:"Return",command:"/fx"}]]
Bot.editMessage("caption",id)
Bot.editInlineKeyboard(x,id)
