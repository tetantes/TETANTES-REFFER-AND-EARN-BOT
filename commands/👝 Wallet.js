/*CMD
  command: 👝 Wallet
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

var currency = Bot.getProperty("currency")
var wallet = User.getProperty("wallet")
var text =
  "<b>👝 Your</b> <code>" +
  currency +
  "</code> <b>wallet is set to :</b> <code>" +
  wallet +
  "</code>\n\n<b>👉 To set/change, click the button below 👇</b>"
var button = [
  [
    {
      text: "👝 Set/Change wallet",
      callback_data: "/setOrChangeWallet"
    }
  ]
]

Api.sendMessage({
  text: text,
  reply_markup: {
    inline_keyboard: button
  },
  parse_mode: "html"
})

