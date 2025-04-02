/*CMD
  command: /privateBroadcast
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (user.telegramid == 6040616626) {
  Bot.runAll({
    command: "/privateBroadcast2",
    for_chats: "private-chats",
    options: {
      msg:
        "*🤑 If you wanna earn daily without any investment then must join our Earning channel where I provide you daily free loots from where you can earn easily 😱\n\n🔥 Join now : @Earn_Sphere*"
    }
  })
  Bot.sendMessage("*🚀 Message Sended To All Users*")
} else {
  Bot.sendMessage("*🔰 You're Not An Admin*")
}

