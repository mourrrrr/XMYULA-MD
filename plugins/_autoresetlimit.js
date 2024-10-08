let {
	proto
} = (await import('@adiwajshing/baileys')).default

export async function all(m) {
	let setting = global.db.data.settings[this.user.jid]
	if (setting.resetlimit) {
		if (new Date() * 1 - setting.resetlimitDB > 604800000) { // waktu reset 7day = 604800000. kamu bisa tanyakan Ai contoh: .bing 1 hari berapa milidetik?
			let list = Object.entries(global.db.data.users);
			let lim = 10;
			list.map(([user, data], i) => (Number(data.limit = lim)));

			const msg = {
				conversation: `*Berhasil mereset setiap limit user menjadi ${lim}*`
			};
			const plaintext = proto.Message.encode(msg).finish();
			const plaintextNode = {
				tag: 'plaintext',
				attrs: {},
				content: plaintext,
			};
			const node = {
				tag: 'message',
				attrs: {
					to: global.info.channel,
					type: 'text'
				},
				content: [plaintextNode],
			};

			conn.query(node);
			setting.resetlimitDB = new Date() * 1
		}
	}
	return !0
}