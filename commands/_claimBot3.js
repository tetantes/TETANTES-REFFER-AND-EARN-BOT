/*CMD
  command: /claimBot3
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (!options) {
  return
}

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

var status = options.result.status
//var totalLeft = data.result.totalleft

/*if (totalLeft === 0) {
  User.setProperty("joined", "Yes", "string")

  var text =
    "<b>💌 Send your <a href='https://play.google.com/store/apps/details?id=bb_app.com.bots.business'>Bots.Business app</a> or <a href='https://app.bots.business'>Bots.Business website</a> mail.</b>"

  Api.sendMessage({
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true
  })*/

if (status === "member" || status === "administrator" || status === "creator") {
  User.setProperty("claimJoined", "Yes", "string")
  
  var text =
    "<b>💌 Send your <a href='https://play.google.com/store/apps/details?id=bb_app.com.bots.business'>Bots.Business app</a> or <a href='https://app.bots.business'>Bots.Business website</a> mail.</b>"

  Api.sendMessage({
    text: text,
    parse_mode: "html",
    disable_web_page_preview: true
  })

  Bot.runCommand("/claimBot4")
} else {
  Bot.runCommand("/claimBot")
}

