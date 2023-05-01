/*CMD
  command: /canc
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: ⛔️ cancel
CMD*/

let res = Libs.ResourcesLib.userRes("balance");
Bot.sendKeyboard("💰 Balance : " +res.value().toFixed(8)+ " LTC,\n🔋 Referral,🎁 Bonus,⛔️ Withdraw,\n💳 Set Email,📊 Status,🗂 History,\n💹 Earn More","*🏡 Main Menu*")
