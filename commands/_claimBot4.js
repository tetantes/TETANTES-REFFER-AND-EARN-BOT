/*CMD
  command: /claimBot4
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var ban = Bot.getProperty(user.telegramid)

if (ban === "Ban") {
  var banText = "<i>🚫 You're banned.</i>"

  Api.sendMessage({
    text: banText,
    parse_mode: "html"
  })
  return
}

var maintenanceStatus = Bot.getProperty("maintenanceStatus")

if (maintenanceStatus === "On") {
  var onText =
    "<i>🛠️ Bot is under maintenance, please come back after some time.</i>"

  Api.sendMessage({
    text: onText,
    parse_mode: "html"
  })
  return
}

var joined = User.getProperty("claimJoined")

if (joined === "Yes") {
  User.setProperty("claimed", "Yes", "string")

  var mail = message

  if (!mail.includes("@")) {
    var notText = "<i>⚠️ Send correct email.</i>"

    Api.sendMessage({
      text: notText,
      parse_mode: "html"
    })

    Bot.runCommand("/claimBot4")
    return
  }

  BBAdmin.installBot({
    email: mail,
    bot_id: bot.id
  })

  var text =
    "<b>🥳 Bot claimed successfully.\n\n💌 Mail :</b> <code>" + mail + "</code>"

  Api.sendMessage({
    text: text,
    parse_mode: "html"
  })

  var userName = user.first_name
  var username = "@" + user.username
  var userID = user.telegramid
  var admin = Bot.getProperty("admin")
  var adminText =
    "<b>🆕 New user claimed bot 🥳\n\n🧒 User : " +
    userName +
    "\n👉 Username : " +
    username +
    "\n🆔 User ID :</b> <code>" +
    userID +
    "</code>\n\n<b>💌 Mail :</b> <code>" +
    mail +
    "</code>"

  Api.sendMessage({
    chat_id: admin,
    text: adminText,
    parse_mode: "html"
  })
} else {
  var notText = "<i>⚠️ Must join to claim</i>"

  Api.sendMessage({
    text: notText,
    parse_mode: "html"
  })

  Bot.runCommand("/claimBot")
}

