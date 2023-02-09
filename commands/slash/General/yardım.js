const discord = require("discord.js")
module.exports = {
    name: "yardım",
    description: "Yardım komutlarını gösterir",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
run: async (client, interaction, config, db) => {
	
	
	const kerem = new discord.EmbedBuilder()
	.setColor("Blue")
	.setTitle("Volrize Ekonomi Botu Yardım Menüsü")
	.setDescription(`
	/çalış => 5'dkde bir çalışırsınız
	/banka-yatır <miktar>  => Belirtilen miktarda bankaya para yatırır
	/banka-çek <miktar>  => Belirtilen miktarda bankadan para çeker
	/dolar-al <miktar>  => Belirtilen miktarda dolar alırsınız (Dolar kuru gerçek hayatla entegredir)
	/dolar-sat <miktar>  => Belirtilen miktarda dolar satarsınız (Dolar kuru gerçek hayatla entegredir)
	/market  => Market ürünlerine bakarsınız
	/cf  => Kumar oynarsınız
	/hesabım  => Hesabınıza bakarsınız
	/ping  => Botun pingi
	`)
	.setFooter({ text: "Volrize Was Here ❤️"})
	return interaction.reply({embeds: [kerem]})
	
},};