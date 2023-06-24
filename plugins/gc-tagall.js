let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `*《😼𝐀𝐧𝐨𝐭𝐚𝐭𝐞 𝐩𝐥𝐚𝐧𝐭𝐚 𝐪𝐮𝐞 𝐬𝐢𝐧𝐨 𝐜𝐮𝐩𝐨 𝐝𝐞 𝐮𝐧𝐚 》*\n\n❏ ${oi}\n\n❏ *𝐓𝐨𝐫𝐧𝐞𝐨𝐬 𝐀𝐝𝐚𝐧 𝐭𝐜:*\n`
for (let mem of participants) {
teks += `┣❤️‍🔥 @${mem.id.split('@')[0]}\n`}
teks += `└𝐀𝐝𝐚𝐧 𝐓𝐂`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler