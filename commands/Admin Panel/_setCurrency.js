/*CMD
  command: /setCurrency
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *💲 Send the currency which you want to set*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var users = user.telegramid
var botLink = "@" + bot.name

if (users === admin) {
  var currency = message

  Bot.setProperty("currency", currency, "string")

  var text = "<b>💲 Currency set to :</b> <code>" + currency + "</code>"

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

