/*CMD
  command: /unbanUser
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *✔️ Send user's telegram id whom you want to unban*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var users = user.telegramid
var botLink = "@" + bot.name

if (users === admin) {
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  var unbanID = message

  if (!isNumeric(unbanID)) {
    var notNumberText = "<i>⚠️ Send only user's telegram id.</i>"

    Api.sendMessage({
      text: notNumberText,
      parse_mode: "html"
    })

    Bot.runCommand("/unbanUser")
    return
  }

  Bot.setProperty(unbanID, "Unban")

  var adminText =
    "<b>🆔 User with telegram id</b> <code>" +
    unbanID +
    "</code> <b>is unbanned now ✔️.</b>"

  Api.sendMessage({
    text: adminText,
    parse_mode: "html"
  })

  var userText = "<i>✔️ You're unbanned by the admin.</i>"

  Api.sendMessage({
    chat_id: unbanID,
    text: userText,
    parse_mode: "html"
  })
} else {
  var notAdminText = "<i>⚠️ You're not the admin of " + botLink + ".</i>"

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  })
}

