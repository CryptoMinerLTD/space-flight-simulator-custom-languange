/*CMD
  command: /mains2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var user = User.getProperty("status")
if ((user == "member") | (user == "administrator") | (user == "creator")){
var key = Bot.getProperty("welcom")
let res = Libs.ResourcesLib.userRes("balance");
Bot.sendKeyboard("💰 Balance : " +res.value().toFixed(8)+ " LTC,\n🔋 Referral,🎁 Bonus,⛔️ Withdraw,\n💳 Set Email,📊 Status,🗂 History,\n💹 Earn More",
  "\n🔄 Refreshed"
)
}
if (user == "left") {
  Bot.runCommand("/start")
}

