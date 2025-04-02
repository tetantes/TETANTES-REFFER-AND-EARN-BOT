/*CMD
  command: /withdraw
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

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

var amount = parseFloat(message)

if (!isNumeric(amount)) {
  var notNumberText = "<i>⚠️ Send only amount.</i>"

  Api.sendMessage({
    text: notNumberText,
    parse_mode: "html"
  })

  Bot.runCommand("/withdraw")
  return
}

var minimumWithdrawal = parseFloat(Bot.getProperty("minimumWithdrawal"))
var currency = Bot.getProperty("currency")

if (amount < minimumWithdrawal) {
  var lessText =
    "<i>⚠️ Minimum withdrawal is</i> <code>" +
    minimumWithdrawal +
    " " +
    currency +
    "</code><i>. Try again.</i>"

  Api.sendMessage({
    text: lessText,
    parse_mode: "html"
  })

  Bot.runCommand("/withdraw")
  return
}

var balance = Libs.ResourcesLib.userRes("balance")

if (amount > balance.value().toFixed(2)) {
  var greaterText =
    "<i>⚠️ You don't have enough balance to withdraw.\n\n💸 Your balance :</i> <code>" +
    balance.value().toFixed(2) +
    " " +
    currency +
    "</code>"

  Api.sendMessage({
    text: greaterText,
    parse_mode: "html"
  })

  Bot.runCommand("/mainMenu")
  return
}

var maximumWithdrawal = parseFloat(Bot.getProperty("maximumWithdrawal"))

if (amount > maximumWithdrawal) {
  var moreText =
    "<i>⚠️ Maximum withdrawal is</i> <code>" +
    maximumWithdrawal +
    " " +
    currency +
    "</code><i>. Try again.</i>"

  Api.sendMessage({
    text: moreText,
    parse_mode: "html"
  })

  Bot.runCommand("/withdraw")
  return
}

User.setProperty("amount", amount, "string")

var wallet = User.getProperty("wallet")
var text =
  "<b>⁉️ Withdrawal confirmation\n\n💸 Amount :</b> <code>" +
  amount +
  " " +
  currency +
  "</code>\n👝 <code>" +
  currency +
  "</code> <b>wallet :</b> <code>" +
  wallet +
  "</code>\n\n<b>✅ Click on one of the button below to proceed 👇</b>"
var buttons = [
  [
    {
      text: "✅ Confirm",
      callback_data: "/confirm"
    },
    {
      text: "❌ Cancel",
      callback_data: "❌ Cancel"
    }
  ]
]

Api.sendMessage({
  text: text,
  reply_markup: {
    inline_keyboard: buttons
  },
  parse_mode: "html"
})

