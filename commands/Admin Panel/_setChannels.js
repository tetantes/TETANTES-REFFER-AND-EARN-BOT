/*CMD
  command: /setChannels
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER
*🏘️ Send channel(s) username(s) without @ and space between them.

👉 Example :* `channel channel`

_⚠️ Note : You can add upto 2 channels only & must make the bot admin in channel(s)._
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
  var channels = message

  if (channels.includes("@")) {
    var notText = "<i>⚠️ Send channel username without '@' only.</i>"

    Api.sendMessage({
      text: notText,
      parse_mode: "html"
    })

    Bot.runCommand("/setChannels")
    return
  }

  var prompt = channels.split(" ")
  var length = prompt.length

  if (length > 2) {
    var greaterText = "<i>⚠️ You can send upto 6 channels only.</i>"

    Api.sendMessage({
      text: greaterText,
      parse_mode: "html"
    })

    Bot.runCommand("/setChannels")
    return
  }

  if (length === 1) {
    if (prompt[0].includes("@")) {
      var notUsernameText = "<i>⚠️ Send channel username without '@' only.</i>"

      Api.sendMessage({
        text: notUsernameText,
        parse_mode: "html"
      })

      Bot.runCommand("/setChannels")
    } else {
      Bot.setProperty("channel1", prompt[0], "string")

      var text = "<b>🏘️ Channel set to : @" + prompt[0] + "</b>"

      Api.sendMessage({
        text: text,
        parse_mode: "html"
      })
    }
  } else if (length === 2) {
    if (prompt[0].includes("@") && prompt[1].includes("@")) {
      var notUsernameText = "<i>⚠️ Send channel username without '@' only.</i>"

      Api.sendMessage({
        text: notUsernameText,
        parse_mode: "html"
      })

      Bot.runCommand("/setChannels")
    } else {
      Bot.setProperty("channel1", prompt[0], "string")
      Bot.setProperty("channel2", prompt[1], "string")

      var text =
        "<b>🏘️ Channels set to :\n\n@" + prompt[0] + "\n@" + prompt[1] + "</b>"

      Api.sendMessage({
        text: text,
        parse_mode: "html"
      })
    }
  } /*else if (length === 3) {
    if (
      prompt[0].includes("@") &&
      prompt[1].includes("@") &&
      prompt[2].includes("@")
    ) {
      var notUsernameText = "<i>⚠️ Send channel username without '@' only.</i>"

      Api.sendMessage({
        text: notUsernameText,
        parse_mode: "html"
      })

      Bot.runCommand("/setChannels")
    } else {
      Bot.setProperty("channel1", prompt[0], "string")
      Bot.setProperty("channel2", prompt[1], "string")
      Bot.setProperty("channel3", prompt[2], "string")

      var text =
        "<b>🏘️ Channels set to :\n\n@" +
        prompt[0] +
        "\n@" +
        prompt[1] +
        "\n@" +
        prompt[2] +
        "</b>"

      Api.sendMessage({
        text: text,
        parse_mode: "html"
      })
    }
  } else if (length === 4) {
    if (
      prompt[0].includes("@") &&
      prompt[1].includes("@") &&
      prompt[2].includes("@") &&
      prompt[3].includes("@")
    ) {
      var notUsernameText = "<i>⚠️ Send channel username without '@' only.</i>"

      Api.sendMessage({
        text: notUsernameText,
        parse_mode: "html"
      })

      Bot.runCommand("/setChannels")
    } else {
      Bot.setProperty("channel1", prompt[0], "string")
      Bot.setProperty("channel2", prompt[1], "string")
      Bot.setProperty("channel3", prompt[2], "string")
      Bot.setProperty("channel4", prompt[3], "string")

      var text =
        "<b>🏘️ Channels set to :\n\n@" +
        prompt[0] +
        "\n@" +
        prompt[1] +
        "\n@" +
        prompt[2] +
        "\n@" +
        prompt[3] +
        "</b>"

      Api.sendMessage({
        text: text,
        parse_mode: "html"
      })
    }
  } else if (length === 5) {
    if (
      prompt[0].includes("@") &&
      prompt[1].includes("@") &&
      prompt[2].includes("@") &&
      prompt[3].includes("@") &&
      prompt[4].includes("@")
    ) {
      var notUsernameText = "<i>⚠️ Send channel username without '@' only.</i>"

      Api.sendMessage({
        text: notUsernameText,
        parse_mode: "html"
      })

      Bot.runCommand("/setChannels")
    } else {
      Bot.setProperty("channel1", prompt[0], "string")
      Bot.setProperty("channel2", prompt[1], "string")
      Bot.setProperty("channel3", prompt[2], "string")
      Bot.setProperty("channel4", prompt[3], "string")
      Bot.setProperty("channel5", prompt[4], "string")

      var text =
        "<b>🏘️ Channels set to :\n\n@" +
        prompt[0] +
        "\n@" +
        prompt[1] +
        "\n@" +
        prompt[2] +
        "\n@" +
        prompt[3] +
        "\n@" +
        prompt[4] +
        "</b>"

      Api.sendMessage({
        text: text,
        parse_mode: "html"
      })
    }
  } else {
    if (
      prompt[0].includes("@") &&
      prompt[1].includes("@") &&
      prompt[2].includes("@") &&
      prompt[3].includes("@") &&
      prompt[4].includes("@") &&
      prompt[5].includes("@")
    ) {
      var notUsernameText = "<i>⚠️ Send channel username without '@' only.</i>"

      Api.sendMessage({
        text: notUsernameText,
        parse_mode: "html"
      })

      Bot.runCommand("/setChannels")
    } else {
      Bot.setProperty("channel1", prompt[0], "string")
      Bot.setProperty("channel2", prompt[1], "string")
      Bot.setProperty("channel3", prompt[2], "string")
      Bot.setProperty("channel4", prompt[3], "string")
      Bot.setProperty("channel5", prompt[4], "string")
      Bot.setProperty("channel6", prompt[5], "string")

      var text =
        "<b>🏘️ Channels set to :\n\n@" +
        prompt[0] +
        "\n@" +
        prompt[1] +
        "\n@" +
        prompt[2] +
        "\n@" +
        prompt[3] +
        "\n@" +
        prompt[4] +
        "\n@" +
        prompt[5] +
        "</b>"

      Api.sendMessage({
        text: text,
        parse_mode: "html"
      })
    }*/
} else {
  var notAdminText = "<i>⚠️ You're not the admin of " + botLink + ".</i>"

  Api.sendMessage({
    text: notAdminText,
    parse_mode: "html"
  })
}

