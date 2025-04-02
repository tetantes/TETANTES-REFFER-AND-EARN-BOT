/*CMD
  command: /setAlertsChannel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *🔴 Send the channel username without "@" which you want to set as alerts channel*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var users = user.telegramid
var botLink = "@" + bot.name

if (users === admin) {
  var alertChannel = message

  if (alertChannel.includes("@")) {
    var includedText = "<i>⚠️ Send username without '@' only.</i>"

    Api.sendMessage({
      text: includedText,
      parse_mode: "html"
    })

    Bot.runCommand("/setAlertsChannel")
    return
  }

  Bot.setProperty("alertsChannel", "@" + alertChannel, "string")

  var text = "<b>🔴 Alerts channel set to : @" + alertChannel + "</b>"

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

