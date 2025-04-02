/*CMD
  command: /setMaintenanceStatus
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER
*🛠️ Send the mode which you want to set as maintenance status from the options below 👇

👉 Options :* `On` */* `Off`
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
  var maintenance = message

  if (maintenance === "On" || maintenance === "Off") {
    Bot.setProperty("maintenanceStatus", maintenance, "string")

    var text =
      "<b>🛠️ Maintenance status set to :</b> <code>" + maintenance + "</code>"

    Api.sendMessage({
      text: text,
      parse_mode: "html"
    })

    Bot.runCommand("/adminPanel")
  } else {
    var notText =
      "<i>⚠️ Send only</i> <code>On</code> <i>or</i> <code>Off</code>."

    Api.sendMessage({
      text: notText,
      parse_mode: "html"
    })

    Bot.runCommand("/setMaintenanceStatus")
  }
} else {
  var notAdminText = "<i>⚠️ You're not the admin of " + botLink + ".</i>"

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  })
}

