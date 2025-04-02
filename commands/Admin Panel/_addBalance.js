/*CMD
  command: /addBalance
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *➕ Send user's telegram id whom you want to add balance*

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

  var addID = message

  if (!isNumeric(addID)) {
    var notNumberText = "<i>⚠️ Send only user's telegram id.</i>"

    Api.sendMessage({
      text: notNumberText,
      parse_mode: "html"
    })

    Bot.runCommand("/addBalance")
    return
  }

  Bot.setProperty("addID", addID, "integer")

  var text =
    "<b>💸 Now send the amount which you want to add.\n\n🆔 User ID :</b> <code>" +
    addID +
    "</code>"

  Api.sendMessage({
    text: text,
    parse_mode: "html"
  })

  Bot.runCommand("/addBalance2")
} else {
  var notAdminText = "<i>⚠️ You're not the admin of " + botLink + ".</i>"

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  })
}

