/*CMD
  command: /setBonus
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *🎁 Send the amount which you want to set as bonus*

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

  var bonus = message

  if (!isNumeric(bonus)) {
    var notNumberText = "<i>⚠️ Send only numerical value.</i>"

    Api.sendMessage({
      text: notNumberText,
      parse_mode: "html"
    })

    Bot.runCommand("/setBonus")
    return
  }

  Bot.setProperty("bonus", bonus, "string")

  var currency = Bot.getProperty("currency")
  var text =
    "<b>🎁 Bonus set to :</b> <code>" + bonus + " " + currency + "</code>"

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

