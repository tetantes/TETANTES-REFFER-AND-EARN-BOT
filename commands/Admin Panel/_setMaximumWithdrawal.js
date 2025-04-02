/*CMD
  command: /setMaximumWithdrawal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *💸 Send the amount which you want to set as maximum withdrawal amount*

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

  var maximumWithdrawal = message

  if (!isNumeric(maximumWithdrawal)) {
    var notNumberText = "<i>⚠️ Send only numerical value.</i>"

    Api.sendMessage({
      text: notNumberText,
      parse_mode: "html"
    })

    Bot.runCommand("/setMaximumWithdrawal")
    return
  }

  Bot.setProperty("maximumWithdrawal", maximumWithdrawal, "string")

  var currency = Bot.getProperty("currency")
  var text =
    "<b>💸 Maximum withdrawal set to :</b> <code>" +
    maximumWithdrawal +
    " " +
    currency +
    "</code>"

  Api.sendMessage({
    text: text,
    parse_mode: "html"
  })

  Bot.runCommand("/adminPanel")
} else {
  var notAdminText = "<i>⚠️ You're not the admin of " + botLink + ".</i>"

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  })
}

