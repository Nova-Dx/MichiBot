import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}${mid.smsMalused4}\n*${usedPrefix + command} Alvaro Diaz - MAMI 100PRE SABE(INTERLUDE)*`
const yt_play = await search(args.join(' '))
const texto1 = `*𓆩 𓃠 𓆪 ✧═══ ${vs} ═══✧ 𓆩 𓃠 𓆪*

ও ${mid.smsYT1}
» ${yt_play[0].title}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও ${mid.smsYT15}
» ${yt_play[0].ago}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও ${mid.smsYT5}
» ${secondString(yt_play[0].duration.seconds)}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও  ${mid.smsYT10}
» ${MilesNumber(yt_play[0].views)}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও  ${mid.smsYT2}
» ${yt_play[0].author.name}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও ${mid.smsYT4}
» ${yt_play[0].url}

*𓆩 𓃠 𓆪 ✧═══ ${vs} ═══✧ 𓆩 𓃠 𓆪*`.trim()

				await conn.sendMessage(m.chat, {
					text: captionvid,
					contextInfo: {
						externalAdReply: {
							title: yt_play[0].title,
							body: packname,
							thumbnailUrl: yt_play[0].thumbnail, 
							mediaType: 1,
							showAdAttribution: true,
							renderLargerThumbnail: true
						}}} , { quoted: m });

				if (command == 'play') {	
					try {
						let v = yt_play[0].url
						const yt = await ytDownload(v, 'audio');
						await conn.sendMessage(m.chat, { audio: { url: yt }, mimetype: 'audio/mpeg', contextInfo: {
							externalAdReply: {
							title: yt_play[0].title,
							body: "",
							thumbnailUrl: yt_play[0].thumbnail, 
							mediaType: 1,
							showAdAttribution: true,
							renderLargerThumbnail: true
						}}} , { quoted: m });
if (command == 'play2') {
			try {
				let v = yt_play[0].url
				const yt = await ytDownload(v, 'video');
				ttl = yt_play[0].title;
				await await conn.sendMessage(m.chat, { video: { url: yt }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `╭━❰  ${wm}  ❱━⬣\n┃ 💜 ${mid.smsYT1}\n┃ ${ttl}\n╰━━━━━❰ *𓃠 ${vs}* ❱━━━━⬣`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m });
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = 0
}}
handler.command = ['play', 'play2']
//handler.limit = 3
//handler.register = true 
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
}
