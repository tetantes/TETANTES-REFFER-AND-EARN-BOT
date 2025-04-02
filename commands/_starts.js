/*CMD
  command: /starts
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

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.runCommand("KEYBOARD")
}else{
var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
    .value()
    .toFixed(0)
//var rn = Libs.Random.randomInt(1,30)
//userPayment.add(rn)
//var run = Libs.Random.randomInt(1,30)
//status.add(run)
//userPayment.add(-1000)
  var stat =
    "📊 _Total Members : " +
    status +
    " Users_\n\n_ "+ 
    null+
    "_\n\n*👑Made by @Ademuyiwa2017👑*"

 // Bot.sendMessage(stat)
  
  var ph = "https://quickchart.io/chart?bkg=white&c={type:%27bar%27,data:{labels:[''],datasets:[{label:%27Total-Users%27,data:["+status+"]},{label:%27null%27,data:["+userPayment.value().toFixed(2) +"]}]}}"
  
Api.sendPhoto({
  photo: ph, 
  caption: stat, 
  parse_mode:"markdown", disable_web_page_preview: false
})
}
