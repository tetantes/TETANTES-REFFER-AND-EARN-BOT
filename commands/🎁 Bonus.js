/*CMD
  command: 🎁 Bonus
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

if (channel1 !== undefined) {
  var joined = User.getProperty("joined")

  if (joined !== "Yes") {
    var notJoinedText = "<i>⚠️ Must join our channels to use the bot.</i>"

    Api.sendMessage({
      text: notJoinedText,
      parse_mode: "html"
    })

    Bot.runCommand("/start")
    return
  }
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

var bonusCollected = User.getProperty("bonusCollected")

if (bonusCollected === "Yes") {
  var collectedText =
    "<i>⚠️ You've have already received bonus in last 24 hours.</i>"

  Api.sendMessage({
    text: collectedText,
    parse_mode: "html"
  })
  return
}

var bonus = Bot.getProperty("bonus")
var balance = Libs.ResourcesLib.userRes("balance")

balance.add(parseFloat(bonus))

User.setProperty("bonusCollected", "Yes", "string")

var currency = Bot.getProperty("currency")
var text =
  "<b>🎁 Congratulations, you've received bonus of</b> <code>" +
  bonus +
  " " +
  currency +
  "</code>."

Api.sendMessage({
  text: text,
  parse_mode: "html"
})

Bot.run({
  command: "/bonus",
  run_after: 86400
})

