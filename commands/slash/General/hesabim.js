const discord = require("discord.js")
const db = require("wio.db")
const csfetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    name: "hesabım",
    description: "Hesabınızı gösterir",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
    run: async (client, interaction, config, db) => {
		
		  csfetch("https://api.bigpara.hurriyet.com.tr/doviz/headerlist/anasayfa").then(async r => {
    const json = await r.json();
    const dolarobj = json.data.filter(c => c.SEMBOL=="USDTRY")[0]
     


	
	//db.add(`para_673802320454352917`, 5000000)
	const para = db.fetch(`para_${interaction.user.id}`) || 0
	const banka = db.fetch(`banka_${interaction.user.id}`) || 0
	const btc = db.fetch(`btc_${interaction.user.id}`) || 0
	const btcpara = btc*dolarobj.SATIS
	const toplam = btcpara+para+banka
	const araba = db.fetch(`araba_${interaction.user.id}`) ? "Var" : "Yok"
	const telefon = db.fetch(`telefon_${interaction.user.id}`) ? "Var" : "Yok"
	const bisiklet = db.fetch(`bisiklet_${interaction.user.id}`) ? "Var" : "Yok"
	
	 const embed = new discord.EmbedBuilder()
	 .setTitle(`Toplam Birikimleriniz`)
	 .setDescription(`
		<:madeniparalar:1067924194685362316> Nakit Paranız: ${para}
		<:banka:1067924265644609576> Bankada Olan Paranız: ${banka}
		<:3320653:1067924225064714433> Dolar Sayınız: ${btc} (${btcpara}TL)
		<:cuzdanvepara:1067924400734736514> Toplam Varlığınız: ${toplam}
		
		🚙 Araba: ${araba}
		📱 Telefon: ${telefon}
		🚴‍♂️ Bisiklet: ${bisiklet}
	 `)
	// .addFields(`Araba:`, `Stok: ${araba}`)
	 .setColor("Blue")
	 .setFooter({ text: "Volrize Was Here ❤️"})
	 
	 
	return interaction.reply({embeds: [embed]})
		  })
},

};