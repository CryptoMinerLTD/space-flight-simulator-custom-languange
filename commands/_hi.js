/*CMD
  command: /hi
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let channel="@CPAUTOPAY"
let text="*📤 New withdrawal*"
var email = User.getProperty("email");
let x = "https://t.me/CPAUTOPAY/3"
var button=[
[{text:"🔎 User : "+user.first_name,url:"https://t.me/ViaraUpdateR"},{text:"🆔 "+user.telegramid,url:"https://t.me/ViaraUpdateR"}],[{text:"🌐 Email: "+email.slice(0,4)+"[****]@gmail.com",url:"https://t.me/ViaraUpdateR"}],[{text:"💵 Amount: "+message+" LTC",url:"https://t.me/ViaraUpdateR"}],[{text:"🔋 Bot Link: @CPAUTOPAYBOT",url:"https://t.me/CPAUTOPAYBOT"}]]
Api.sendPhoto({chat_id:channel,photo:x,text:text,reply_markup:{inline_keyboard:button}})
