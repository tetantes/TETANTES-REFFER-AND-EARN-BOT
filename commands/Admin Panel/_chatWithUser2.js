/*CMD
  command: /chatWithUser2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var users = user.telegramid
var botLink = "@" + bot.name

if (users === admin) {
  var chatID = Bot.getProperty("chatID")
  var messages = message
  var userText =
    "<b>💬 Message from admin\n\n👉 Message :</b> <i>" + messages + "</i>"
  var button = [
    [
      {
        text: "💬 Reply to admin",
        callback_data: "📞 Support"
      }
    ]
  ]

  Api.sendMessage({
    chat_id: chatID,
    text: userText,
    reply_markup: {
      inline_keyboard: button
    },
    parse_mode: "html"
  })

  var adminText =
    "<b>💬 Message sent to</b> <code>" +
    chatID +
    "</code>\n\n<b>👉 Message :</b> <i>" +
    messages +
    "</i>"

  Api.sendMessage({
    text: adminText,
    parse_mode: "html"
  })
} else {
  var notAdminText = "<i>⚠️ You're not the admin of " + botLink + ".</i>"

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  })
}

