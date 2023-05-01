/*CMD
  command: /setupC13
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.Coinbase.apiCall({
  method: "GET",   // method can be GET and POST
  path: "accounts",
  onSuccess: "onGetAccounts",
  onError: "/onApiError"  // onError command
  // background: true // perform api call in background for big timeout limit
})
