/*CMD
  command: /ref
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🔋 referral
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*❌ You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*🛑 Bot is currently OFF*");
return
}

if (chat.chat_type != "private") {
  Bot.sendMessage("_Open me in private_")
  return
}

let lib = Libs.ReferralLib
let reflist = lib.currentUser.refList
reflist = lib.currentUser.refList.get()
let tgid = user.telegramid
let refcom = Libs.ResourcesLib.userRes("refcom")
let bot = Libs.ReferralLib.currentUser.getRefLink("MobileCashRobot","131")

let msg
if (reflist.length > 0) {
  msg = reflist.length
} else {
  msg = "0"
}
let key2 = Bot.getProperty("refcomi")
var yy = key2/10000000
var key = [[{ title: "↗️ Share", url: "https://t.me/share/url?url="+bot }]]

Bot.sendInlineKeyboard(key,"💰 Invite Users And Earn *" +yy+ "* *LTC*" + "\n\n*💹 Your Link :* " +"["+bot+"]" + "\n\n*✅ You Invited :* " +reflist.length+ " Users")
Bot.runCommand("ref")
var fx = User.getProperty("Extra")
if (fx == undefined){
var referrer = Libs.ReferralLib.currentUser.attractedByUser();
var bonus = 0.000000005;
if(referrer){
  var referrerRes = Libs.ResourcesLib.anotherUserRes("balance", referrer.telegramid);
referrerRes.add(bonus);
Bot.sendMessageToChatWithId(referrer.telegramid,"*➕ 0.000000005 LTC for Inviting active user*");
}
}
User.setProperty("Extra","Hi","string")
