/*CMD
  command: /onSuccess
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var result = options.result.data
var amountsent = result.amount.amount.slice(1,500)
var email = result.to.email
Bot.sendMessage("💸 *Payment Successfully Send. Check Your Coinbase.*\n\n*Amount :*"+amountsent+" *LTC*\n*Email :*"+email);
