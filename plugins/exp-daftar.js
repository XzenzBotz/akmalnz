import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
let namae = conn.getName(m.sender)
const sections = [
{
title: "Select Your Age Here !",
rows: [
{title: "Random Years", rowId: '.daftar ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
]
},
{
title: "O L D",
rows: [
{title: "30 Years", rowId: '.daftar ' + namae + '.30 '},
{title: "29 Years", rowId: '.daftar ' + namae + '.29 '},
{title: "28 Years", rowId: '.daftar ' + namae + '.28 '},
{title: "27 Years", rowId: '.daftar ' + namae + '.27 '},
{title: "26 Years", rowId: '.daftar ' + namae + '.26 '},
{title: "25 Years", rowId: '.daftar ' + namae + '.25 '},
{title: "24 Years", rowId: '.daftar ' + namae + '.24 '},
{title: "23 Years", rowId: '.daftar ' + namae + '.23 '},
{title: "22 Years", rowId: '.daftar ' + namae + '.22 '},
{title: "21 Years", rowId: '.daftar ' + namae + '.21 '}
]
},
{
title: "Y O U N G",
rows: [
{title: "20 Years", rowId: '.daftar ' + namae + '.20 '},
{title: "19 Years", rowId: '.daftar ' + namae + '.19 '},
{title: "18 Years", rowId: '.daftar ' + namae + '.18 '},
{title: "17 Years", rowId: '.daftar ' + namae + '.17 '},
{title: "16 Years", rowId: '.daftar ' + namae + '.16 '},
{title: "15 Years", rowId: '.daftar ' + namae + '.15 '},
{title: "14 Years", rowId: '.daftar ' + namae + '.14 '},
{title: "13 Years", rowId: '.daftar ' + namae + '.13 '},
{title: "12 Years", rowId: '.daftar ' + namae + '.12 '},
{title: "11 Years", rowId: '.daftar ' + namae + '.11 '},
{title: "10 Years", rowId: '.daftar ' + namae + '.10 '},
{title: "9 Years", rowId: '.daftar ' + namae + '.9 '}
]
},
]

const listMessage = {
  text: `│›Please select your age at the bottom button...`,
  footer: `┗ *Your Name:* ${conn.getName(m.sender)}\n<❔> Want a costume name? type *${usedPrefix + command} yourname.age*`,
  title: "᯾- - - - -  𝗥𝗘𝗚𝗜𝗦𝗧𝗘𝗥 - - - - -᯾",
  buttonText: "𝗖𝗹𝗶𝗰𝗸 𝗛𝗲𝗿𝗲 !",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `[💬] Kamu sudah terdaftar\nMau daftar ulang? *${usedPrefix}unreg <SERIAL NUMBER>*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw 'WOI TUA (。-`ω´-)'
  if (age < 5) throw 'Halah dasar bocil 😆'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  let cap = `
┏─𑁍 𝚄𝚂𝙴𝚁𝚂 ☃︎
│☞︎︎︎ *𝚂𝚝𝚊𝚝𝚞𝚜:* ☑️ sᴜᴄᴄᴇssғᴜʟ
│☞︎︎︎ *𝙽𝚊𝚖𝚎:* ${name} ☂︎
│☞︎︎︎ *𝙰𝚐𝚎:* ${age} 𝚈𝚎𝚊𝚛𝚜
│☞︎︎︎ *𝚂𝙽:* ${sn}
┗────···𑁍

𖣘 𝙳𝚊𝚝𝚊 𝚞𝚜𝚎𝚛 𝚢𝚊𝚗𝚐 𝚝𝚎𝚛𝚜𝚒𝚖𝚙𝚊𝚗 𝚍𝚒𝚍𝚊𝚝𝚊𝚋𝚊𝚜𝚎 𝚋𝚘𝚝, 𝚍𝚒𝚓𝚊𝚖𝚒𝚗 𝚊𝚖𝚊𝚗 𝚝𝚊𝚗𝚙𝚊 𝚝𝚎𝚛𝚜𝚑𝚊𝚛𝚎 (. ❛ ᴗ ❛.)
`
  let buttonMessage= {
'document':{'url':sgc},
'mimetype':global.ddocx,
'fileName':'᯾- - - - -  𝗥𝗘𝗚𝗜𝗦𝗧𝗘𝗥 - - - - -᯾',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':global.sig,
'mediaType':2,
'previewType':'pdf',
'title':global.titlebot,
'body':global.titlebot,
'thumbnail':await(await fetch('https://telegra.ph/file/4a7e5f18efaadec18a7a0.jpg')).buffer(),
'sourceUrl':sgc}},
'caption':cap,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'𝗠𝗲𝗻𝘂'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'𝗗𝗼𝗻𝗮𝘀𝗶'},'type':1}
],
'headerType':6}
await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(daftar|verify|reg(ister)?)$/i

export default handler
