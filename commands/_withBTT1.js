/*CMD
  command: /withBTT1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var email = User.getProperty("email");
var balance = Libs.ResourcesLib.userRes("balance")
var withdraw = Libs.ResourcesLib.userRes("withdraw")
let userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global");
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
let history = User.getProperty("historyb")
var id = "CPAUTOPAYBOT"

let info =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
let value = message
let x = Bot.getProperty("Minw")
let z = x/10000000
if(!isNumeric(value)){
Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*",{is_reply:true})
return
}
if(message <  z ){
Bot.sendMessage("*❌ Minimum amount to withdraw*  *"+z.toFixed(8)+ "* *LTC*")
}else{
if(message > balance.value()){
Bot.sendMessage("*🚫 You Can Withdraw Maximum* _"+balance.value().toFixed(8)+"_ *LTC*")
}else{
Libs.Coinbase.apiCall({
  method: "POST",   
  path: "accounts/b1dcacfe-5307-57b9-9e39-38f950cb5c3e/transactions/", // you find it in coinbase.com/accounts/111111
  body: { 
 "type": "send",
 "to": email,
 "amount": message,
 "currency": "LTC"
},
  onSuccess: "/onSuccess",
  onError: "/onApiError"  // onError command
})
var newh = "*💰 Amount: :* "+message+ " *LTC* "+"\n*Reason:* " + "Withdraw" + "\n*📆 Date:* "+time;
User.setProperty("history",newh,"string")
var nwh = "*💰 Amount: :* "+message+ " *LTC* "+"\n*Reason:* " + "Withdraw" + "\n*📆 Date:* "+time;
var toal = nwh+history;
User.setProperty("history",toal,"string")
balance.add(-data.message)
withdraw.add(+data.message)
userPayment.add(message*1)
let channel="@CPAUTOPAY"
let text="*📤 New withdrawal*"
var email = User.getProperty("email");
let x = "https://t.me/CPAUTOPAY/3"
var button=[
[{text:"🔎 User : "+user.first_name,url:"https://t.me/ViaraUpdateR"},{text:"🆔 "+user.telegramid,url:"https://t.me/ViaraUpdateR"}],[{text:"🌐 Email: "+email.slice(0,4)+"[****]@gmail.com",url:"https://t.me/ViaraUpdateR"}],[{text:"💵 Amount: "+message+" LTC",url:"https://t.me/ViaraUpdateR"}],[{text:"🔋 Bot Link: @CPAUTOPAYBOT",url:"https://t.me/CPAUTOPAYBOT"}]]
Api.sendPhoto({chat_id:channel,photo:x,text:text,reply_markup:{inline_keyboard:button}})
}
}


