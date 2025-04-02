/*CMD
  command: /setPerRefer
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *👬 Send the amount which you want to set as referral bonus*

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

  var perRefer = message

  if (!isNumeric(perRefer)) {
    var notNumberText = "<i>⚠️ Send only numerical value.</i>"

    Api.sendMessage({
      text: notNumberText,
      parse_mode: "html"
    })

    Bot.runCommand("/setPerRefer")
    return
  }

  Bot.setProperty("perRefer", perRefer, "string")

  var currency = Bot.getProperty("currency")
  var text =
    "<b>🧑‍🤝‍🧑 Per refer set to :</b> <code>" +
    perRefer +
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

