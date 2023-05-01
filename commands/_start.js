/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let id = Bot.getProperty("channel1")
let idd = Bot.getProperty("channel2")
let id2 = Bot.getProperty("channel3")
let id3 = Bot.getProperty("channel4")
let id4 = Bot.getProperty("channel5")
var keyboard = [[{ text: "✅ Joined" }]]
var text =
  "*✅ You must join our channels:\n*["+id+"]\n["+idd+"]\n["+id2+"]\n["+id3+"]\n["+id4+"]\n\n*➡️ Before using this bot*"
Api.sendMessage({
  chat_id: user.telegramid,
  text: text,
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {
    keyboard: keyboard,
    resize_keyboard: true
  }
})
function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
Bot.sendMessageToChatWithId()
}

function doAlreadyAttracted() {
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)

var welco = User.getProperty("welco")
if (welco == undefined) {
  var user_link =
    "[" + user.first_name + "]" + "(" + "tg://user?id=" + user.telegramid + ")"
  var status = Libs.ResourcesLib.anotherChatRes("tota", "global")
  status.add(1)
}
User.setProperty("welco", user.telegramid, "text")

