/*CMD
  command: /claimBot2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (request.data) {
  var chatID = request.message.chat_id
  var messageID = request.message.message_id

  Api.deleteMessage({
    chat_id: chatID,
    message_id: messageID
  })
}

var ban = Bot.getProperty(user.telegramid)

if (ban === "Ban") {
  var banText = "<i>🚫 You're banned.</i>"

  Api.sendMessage({
    text: banText,
    parse_mode: "html"
  })
  return
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus")

if (maintenanceStatus === "On") {
  var onText =
    "<i>🛠️ Bot is under maintenance, please come back after some time.</i>"

  Api.sendMessage({
    text: onText,
    parse_mode: "html"
  })
  return
}

var channel = "@codingwithmohit"
//var token = bot.token
var userID = user.telegramid
/*var url =
  "https://api.projectoid.site/v1/telegram/membership/index.php?token=" +
  token +
  "&userId=" +
  userID +
  "&chatIds=" +
  channel

HTTP.get({
  url: url,
  success: "/claimBot3"
})*/

Api.getChatMember({
  chat_id: channel,
  user_id: userID,
  on_result: "/claimBot3"
})

