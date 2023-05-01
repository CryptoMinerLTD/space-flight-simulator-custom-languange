/*CMD
  command: /fx
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var x = [{title:"Hi",command:"/code2"}]
if(request.data){
var message_id = request.message.message_id
}
var id = message_id 
Bot.editMessage("Test",id)
Bot.editInlineKeyboard(x,id)
