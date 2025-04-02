/*CMD
  command: /sendBot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *✉️ Send the mail(s) with a comma ( , ) between them if have more than one :-* `xyz@xyz.com, xyz@xyz.com`

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var users = user.telegramid
var botLink = "@" + bot.name

if (users === admin) {
  var mails = message

  if (!mails.includes("@")) {
    var notText = "<i>⚠️ Send correct mail(s) only.</i>"

    Api.sendMessage({
      text: notText,
      parse_mode: "html"
    })

    Bot.runCommand("/sendBot")
    return
  }

  if (mails.includes(",")) {
    mails = mails.split(",")

    for (var i in mails) {
      BBAdmin.installBot({
        email: mails[i],
        bot_id: bot.id
      })

      var botLink = "@" + bot.name
      var text =
        "<b>✅ " + botLink + " successfully sent to : " + mails[i] + "</b>"
      Api.sendMessage({
        text: text,
        parse_mode: "html"
      })
    }
  } else {
    BBAdmin.installBot({
      email: mails,
      bot_id: bot.id
    })

    var text =
      "<b>✅ " + botLink + " successfully sent to : " + mails + "</b>"
    Api.sendMessage({
      text: text,
      parse_mode: "html"
    })
  }
} else {
  var notAdminText = "<i>⚠️ You're not the admin of " + botLink + ".</i>"

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  })
}

