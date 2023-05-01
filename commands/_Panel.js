/*CMD
  command: /Panel
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var key = Bot.getProperty("admin_chat")
if(user.telegramid == 1980006765){
var key = [[{title:"📛 Channels",command:"/channels"}],[{title:"🔄 Change Balance",command:"/addbUuu"},{title:"🎙 Broadcast",command:"/broadU"}],[{title:"💰 Check User Balance",command:"/checku"}],[{title:"🎁 Gift Sending",command:"/gifUuu"},{title:"🔱 Earn More Text",command:"/earn"}],[{title:"🛑 Ban User",command:"/banuser"},{title:"✅ Unban User",command:"/unbanuser"}],[{title:"🕹 Transfer Admin Panel",command:"/admintrans"}],[{title:"👫 Set Ref Bonus",command:"/setrefco"}],[{title:"🎁 Daily Bonus",command:"/setbons"},{title:"♨️ Minimum Withdraw",command:"/minw"}],[{title:"🔌 Bot Stop and On",command:"/botstoPon"}],[{title:"🔆 Welcome Text",command:"/welco"}]]

Bot.sendInlineKeyboard(key,"*Hey* " +user.first_name+ "\nWelcome To the admin panel" + "\nWarning when using this panel please don't send any other command it may spoil your work")
}else{
return
}
