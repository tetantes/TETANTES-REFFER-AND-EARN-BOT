/*CMD
  command: Edit4
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

let msg_id = options.result.message_id;
Bot.editMessage("_▰▱▱▱▱▱▱▱▱▱ 0%_",msg_id)
Bot.editMessage("_▰▰▱▱▱▱▱▱▱▱ 10%_",msg_id)
Bot.editMessage("_▰▰▰▱▱▱▱▱▱▱ 19%_",msg_id)
Bot.editMessage("_▰▰▰▰▱▱▱▱▱▱ 28%_",msg_id)
Bot.editMessage("_▰▰▰▰▰▱▱▱▱▱ 40%_",msg_id)
Bot.editMessage("_▰▰▰▰▰▰▱▱▱▱ 47%_",msg_id)
Bot.editMessage("_▰▰▰▰▰▰▰▱▱▱ 56%_",msg_id)
Bot.editMessage("_▰▰▰▰▰▰▰▰▱▱ 67%_",msg_id)
Bot.editMessage("_▰▰▰▰▰▰▰▰▰▱ 88%_",msg_id)
Bot.editMessage("_▰▰▰▰▰▰▰▰▰▰ 100%_",msg_id)
Bot.editMessage(" *Loading completed* ``",msg_id)
Bot.runCommand("/starts")
