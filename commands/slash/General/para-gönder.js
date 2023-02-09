const discord = require("discord.js")
const db = require("wio.db")

module.exports = {
    name: "para-gönder",
    description: "Para gönderirsiniz",
    type: 1,
    options: [{
        name: "miktar",
        description: "Yatıracağınız TL miktarı",
        type: 3,
        required: true
    },
	{
        name: "kisi",
        description: "Parayı göndereceğiniz kişi",
        type: 6,
        required: true,
		
    }],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
run: async (client, interaction, config, db) => {
	
	
	const para = db.fetch(`para_${interaction.user.id}`)
	const miktar = interaction.options.getString("miktar")
	   if (!Number(miktar)) return interaction.reply("Lütfen sayı giriniz!")
	const kisi = interaction.options.getUser("kisi")
	if (kisi.id == interaction.user.id) return interaction.reply("Kendine para gönderemezsin!")
	if (kisi.bot) return interaction.reply("Bota para gönderemezsin!")
	
	if (miktar > para) return interaction.reply("Göndereceğiniz tutar hesabınızda bulunmuyor!")
	
	await
	db.substr(`para_${interaction.user.id}`, miktar)
	db.add(`para_${kisi.id}`, miktar)
	return interaction.reply(`Başarıyla <@${kisi.id}> kişisine ${miktar} TL gönderdin!`)
	
	
	
	
	
	
	
	
},};