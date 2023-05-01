/*CMD
  command: /loginme
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Admin Password:
  keyboard: 
  aliases: 
CMD*/


let msg = "Access denied. Password is: `Incorrect`"

if(message=="0170"){
  Bot.setProperty("admin_chat", chat.chatid, "string")
  msg = "You admin now. Please wait messages from users";
}

Bot.sendMessage(msg);

