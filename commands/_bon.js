/*CMD
  command: /bon
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🎁 bonus
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

var state = Bot.getProperty("BON")
if (state=="🛑 Turned OFF"){
Bot.sendMessage("*⛔️ Bonus Button is Currently Locked* ")
return
}
function canRun(){
  var last_run_at5 = User.getProperty("last_run_at5");
  if(!last_run_at5){ return true }
  
  var minutes = (Date.now() - last_run_at5) /1000/60;
  
  var minutes_in_day = 24*60
  var next = (minutes_in_day - minutes)
var wait_hours=Math.floor( next /3600)
next-= wait_hours * 60
var wait_minutes=Math.floor(next)
var seconds= Math.floor((next - wait_minutes)*60)
  if(minutes < minutes_in_day){
   Bot.sendMessage("*🚨 You Cannot Collect For next :* \n⏰ " +wait_minutes+ " *Minutes* "+ seconds+ " *Seconds*");
   return
 }
  return true;
 }
let history = User.getProperty("history")
var time = Libs.DateTimeFormat.format(new Date(),"dd/m/yyyy h:M:s T")+"M"
if(!canRun()){ return }
User.setProperty("last_run_at5", Date.now(), "integer");
var key = Bot.getProperty("Bonu")
var yy = key/10000000
let res = Libs.ResourcesLib.userRes("balance")
res.add(yy)
Bot.sendMessage("*🎉 You Have Earned* " +yy.toFixed(8) + " *LTC*")
if(history == undefined){

var newh = "\n"+"*💰 Amount:* "+ yy.toFixed(8)+ " *LTC* "+"\n*Reason:* " + "Daily Bonus" + "\n*📆 Date:* "+time+"\n";
User.setProperty("history",newh,"string")
}else{
var nwh = "\n"+"*💰 Amount:* "+yy.toFixed(8)+ " *LTC* "+"\n*Reason:* " + "Daily Bonus" + "\n*📆 Date:* "+time+"\n";
var toal = nwh+history;
User.setProperty("history",toal,"string")
}
