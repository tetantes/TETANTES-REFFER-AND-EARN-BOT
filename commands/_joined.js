/*CMD
  command: /joined
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

var channel1 = Bot.getProperty("channel1")
var channel2 = Bot.getProperty("channel2")
/*var channel3 = Bot.getProperty("channel3")
var channel4 = Bot.getProperty("channel4")
var channel5 = Bot.getProperty("channel5")
var channel6 = Bot.getProperty("channel6")
var token = bot.token*/
var userID = user.telegramid

if (channel1 === undefined) {
  Bot.runCommand("/mainMenu")
} else if (channel2 === undefined) {
  var channels = "@" + channel1
  /*var url =
    "https://api.projectoid.site/v1/telegram/membership/index.php?token=" +
    token +
    "&userId=" +
    userID +
    "&chatIds=" +
    channels

  HTTP.get({
    url: url,
    success: "/joined2"
  })*/

  Api.getChatMember({
    chat_id: channels,
    user_id: userID,
    on_result: "/check1"
  })
} else {
  /*var channels = [
    "@" + channel1,
    "@" + channel2,
    "@" + channel3,
    "@" + channel4,
    "@" + channel5,
    "@" + channel6
  ]
  var url =
    "https://api.projectoid.site/v1/telegram/membership/index.php?token=" +
    token +
    "&userId=" +
    userID +
    "&chatIds=" +
    channels

  HTTP.get({
    url: url,
    success: "/joined2"
  })*/

  Api.getChatMember({
    chat_id: "@" + channel1,
    user_id: userID,
    on_result: "/check1"
  })

  Api.getChatMember({
    chat_id: "@" + channel2,
    user_id: userID,
    on_result: "/check2"
  })
}

