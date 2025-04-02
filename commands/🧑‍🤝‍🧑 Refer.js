/*CMD
  command: 🧑‍🤝‍🧑 Refer
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

var channel1 = Bot.getProperty("channel1")

if (channel1 !== undefined) {
  var joined = User.getProperty("joined")

  if (joined !== "Yes") {
    var notJoinedText = "<i>⚠️ Must join our channels to use the bot.</i>"

    Api.sendMessage({
      text: notJoinedText,
      parse_mode: "html"
    })

    Bot.runCommand("/start")
    return
  }
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

var inviteLink = Libs.ReferralLib.getLink()
var referCount = Libs.ReferralLib.getRefCount()
var perRefer = Bot.getProperty("perRefer")
var currency = Bot.getProperty("currency")
var text =
  "<b>👬 Your invite link : " +
  inviteLink +
  "\n\n💸 Per refer :</b> <code>" +
  perRefer +
  " " +
  currency +
  "</code>\n\n<b>👉 Total invited users :</b> <code>" +
  referCount +
  "</code>"

Api.sendMessage({
  text: text,
  parse_mode: "html"
})

