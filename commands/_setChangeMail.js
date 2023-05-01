/*CMD
  command: /setChangeMail
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/


var email = User.getProperty("email")
if (message.length < 10){
Bot.sendMessage("🚨 " +message+ " *:Is Not A Valid Email Address 🚧*")
}else{
User.setProperty("email",message,"string")
Bot.sendMessage("*✅ Your Email Was Successfully Verified*")
}
