/*CMD
  command: /reply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *📞 Send the reply*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var users = user.telegramid
var botLink = "@" + bot.name

if (users === admin) {
  var replyID = Bot.getProperty("replyID")
  var reply = message
  var userText = "<b>📞 Reply from admin\n\n👉 Reply :</b> <i>" + reply + "</i>"
  var button = [
    [
      {
        text: "📞 Reply to admin",
        callback_data: "📞 Support"
      }
    ]
  ]

  Api.sendMessage({
    chat_id: replyID,
    text: userText,
    reply_markup: {
      inline_keyboard: button
    },
    parse_mode: "html"
  })

  var adminText =
    "<b>📞 Reply sent to</b> <code>" +
    replyID +
    "</code>\n\n<b>👉 Reply :</b> <i>" +
    reply +
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

