/*CMD
  command: /check2
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

var status = options.result.status
var channel2 = "@" + Bot.getProperty("channel2")

if (status === "member" || status === "administrator" || status === "creator") {
  User.setProperty("joined", "Yes", "string")

  Api.sendMessage({
    text: "Joined : " + channel2,
    parse_mode: "html"
  })

  Bot.runCommand("/start1")
} else {
  Bot.runCommand("/start1")
}

