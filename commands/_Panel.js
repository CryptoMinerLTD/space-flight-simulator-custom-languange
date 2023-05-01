/*CMD
  command: /generate_codes
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: Please select an option:
  keyboard: Generate Redeem Codes,Check Admin Status,Code Redemption
  aliases: 
CMD*/

// Function to generate a random 24-digit redeem code
function generateRedeemCode() {
  var code = "";
  for (var i = 0; i < 24; i++) {
    code += Math.floor(Math.random() * 10);
  }
  return code;
}

var admin_chat_id = Bot.getProperty("admin_chat");
var user_chat_id = request.chat.id;

// Check if user is admin
function isAdmin() {
  if (user_chat_id == admin_chat_id) {
    return true;
  }
  return false;
}

var command = options[""];

if (command == "Generate Redeem Codes") {
  // Check if admin
  if (!isAdmin()) {
    Bot.sendMessage("Only admins are allowed to generate redeem codes.");
    return;
  }

  var currency_to_add = options["Currency to add"];
  var num_codes_to_generate = options["Number of codes to generate"];

  // Generate redeem codes and save them to an array
  var redeem_codes = [];
  for (var i = 0; i < num_codes_to_generate; i++) {
    var code = generateRedeemCode();
    redeem_codes.push(code);
  }

  // Send the redeem codes to the admin
  Bot.sendMessage("Here are the generated redeem codes:");
  for (var i = 0; i < redeem_codes.length; i++) {
    Bot.sendMessage(redeem_codes[i]);
  }

  // Save the redeem codes to the database or file
  // ...

} else if (command == "Check Admin Status") {
  // Check if admin
  if (!isAdmin()) {
    Bot.sendMessage("You are not an admin.");
    return;
  }

  Bot.sendMessage("You are an admin.");

} else if (command == "Code Redemption") {
  var redeem_code = options["Redeem Code"];

  // Check if the redeem code is valid and has not been used before
  // ...

  // Add the specified currency to the user's balance
  var user_id = request.user.id;
  var user_balance = Libs.ResourcesLib.anotherUserRes("balance", user_id);
  user_balance.add(currency_to_add);

  Bot.sendMessage("The redeem code has been successfully redeemed, and " + currency_to_add + " has been added to your balance.");
}
