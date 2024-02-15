const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['919614477116'] //ur owner number
global.ownernomer = "918345084568" //ur owner number2
global.ownername = "🦄Dream Guy Xeon" //ur owner name
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: DGXeon" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = "Cheems Bot MD V8"
global.ownernumber = '919614477116'
global.ownername = '🦄𝙎 𝙐 𝞑 𝞓 𝞒 𝙐 🕊✨'
global.ownerNumber = ["919614477116@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@DGXeon"
global.websitex = "https://youtu.be/L_SIk59QeAU"
global.wagc = "https://chat.whatsapp.com/Dc2qyVeK8JbJq8Gr3U1pKH"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD6' //script link
global.packname = "❤‍🩹𝓘❜𝓶 𝓷𝓸𝓽 𝓪𝓯𝓻𝓪𝓲𝓭 𝓸𝓯 𝓼𝓽𝓸𝓻𝓶𝓼 𝓫𝓮𝓬𝓪𝓾𝓼𝓮 𝓘❜𝓶 𝓵𝓮𝓪𝓻𝓷𝓲𝓷𝓰 𝓽𝓸 𝓼𝓪𝓲𝓵 𝓶𝔂 𝓸𝔀𝓷 𝓼𝓱𝓲𝓹👀🛥ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ+₉₆₁₄₄₇₇₁₁₆ㅤ👀  𝖘𝖚𝖇𝖆𝖗𝖚ㅤㅤㅤㅤㅤㅤㅤ𝓞𝓷𝓵𝔂 𝓛𝓸𝓸𝓴 𝓗𝓮𝓮 𝓐𝓽𝓽𝓲𝓽𝓾𝓭𝓮😈 𝓦𝓪𝓵𝓪 𝓗𝓪𝓲 𝓑𝓾𝓽♥ 𝓓𝓲𝓵 𝓜𝓮 𝓚𝓸𝓲 𝓖𝓱𝓪𝓶𝓪𝓷𝓭 𝓝𝓪𝓱𝓲 𝓗𝓪𝓶𝓪𝓻𝓮😇"
global.author = "🦄드림 가이 Xeon\n\n"
global.creator = "919614477116@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
