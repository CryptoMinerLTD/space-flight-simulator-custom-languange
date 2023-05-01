/*CMD
  command: /bb2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send amount for Gift :
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if (user.telegramid == key){
let amount = parseFloat(message)
let tgid = User.getProperty("id")
let res = Libs.ResourcesLib.anotherUserRes("balance", tgid)
res.add(parseFloat(amount))
Bot.sendMessage("*The amount " +amount+ " TRX has been added to the User ID: * "   +tgid+ " * balance*");
Bot.sendMessageToChatWithId(tgid,"*🎁 You have just received " + amount + " TRX from admin.*");
}else{
return
}

//You need to send amount after

