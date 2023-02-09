const discord = require("discord.js")
const db = require("wio.db")
const csfetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    name: "dolar-sat",
    description: "Dolar Alırsınız",
    type: 1,
    options: [{
            name: "adet",
            description: "Satacağınız Dolar miktarı",
            type: 3,
            required: true
        }],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
run: async (client, interaction, config, db) => {


  csfetch("https://api.bigpara.hurriyet.com.tr/doviz/headerlist/anasayfa").then(async r => {
    const json = await r.json();
    const dolarobj = json.data.filter(c => c.SEMBOL=="USDTRY")[0]
     


  
	
	const para = db.fetch(`para_${interaction.user.id}`) 
	const btc = db.fetch(`btc_${interaction.user.id}`)
	const adet = interaction.options.getString('adet')
	   if (!Number(adet)) return interaction.reply("Lütfen sayı giriniz!")
	const eksipara = adet*dolarobj.SATIS
	 
	 if (adet < 1) return interaction.reply("En az 1 adet dolar satabilirsiniz!")
	
	if (eksipara > para) return interaction.reply("Yetersiz nakit paranız var!")
	db.add(`para_${interaction.user.id}`, eksipara)
	db.substr(`btc_${interaction.user.id}`, adet)
	return interaction.reply(`Başarıyla ${adet} adet Dolar sattınız!`)
 })
},
}


