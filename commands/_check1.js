/*CMD
  command: /check1
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

/*//Bot.inspect(content)
var data = JSON.parse(content)
//Bot.inspect(data)
var totalLeft = data.result.totalleft

if (totalLeft === 0) {
  User.setProperty("joined", "Yes", "string")

  Bot.runCommand("/mainMenu")
} else {
  Bot.runCommand("/start")
}
*/

if (!options) {
  return
}

var channel2 = Bot.getProperty("channel2")
var status = options.result.status
var channel1 = "@" + Bot.getProperty("channel1")

if (channel2 === undefined) {
  if (
    status === "member" ||
    status === "administrator" ||
    status === "creator"
  ) {
    User.setProperty("joined", "Yes", "string")

    Api.sendMessage({
      text: "Joined : " + channel1,
      parse_mode: "html"
    })

    Bot.runCommand("/mainMenu")
  } else {
    Bot.runCommand("/start")
  }
} else {
  if (
    status === "member" ||
    status === "administrator" ||
    status === "creator"
  ) {
    Api.sendMessage({
      text: "Joined : " + channel1,
      parse_mode: "html"
    })
  }
}

