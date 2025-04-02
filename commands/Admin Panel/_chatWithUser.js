/*CMD
  command: /chatWithUser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *🆔 Send user's telegram id whom you want to chat*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var users = user.telegramid
var botLink = "@" + bot.name

if (users === admin) {
  function isNumerc(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  var chatID = message

  if (!isNumerc(chatID)) {
    var notNumberText = "<i>⚠️ Send only user's telegram id.</i>"

    Api.sendMessage({
      text: notNumberText,
      parse_mode: "html"
    })

    Bot.runCommand("/chatWithUser")
    return
  }

  Bot.setProperty("chatID", chatID, "integer")

  var text =
    "<b>💬 Send the message to chat\n\n🆔 Chat ID :</b> <code>" +
    chatID +
    "</code>"

  Api.sendMessage({
    text: text,
    parse_mode: "html"
  })

  Bot.runCommand("/chatWithUser2")
} else {
  var notAdminText = "<i>⚠️ You're not the admin of " + botLink + ".</i>"

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  })
}

