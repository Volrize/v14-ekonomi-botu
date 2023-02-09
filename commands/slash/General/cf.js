const discord = require("discord.js")
const db = require("wio.db")

module.exports = {
    name: "cf",
    description: "Kumar Oynarsınız",
    type: 1,
    options: [{
        name: "miktar",
        description: "Kumara yatıracağınız miktar",
        type: 3,
        required: true
    }],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
run: async (client, interaction, config, db) => {

    const para = db.fetch(`para_${interaction.user.id}`)
   const miktar = interaction.options.getString("miktar")
   if (!Number(miktar)) return interaction.reply("Lütfen sayı giriniz!")
   if (miktar < 1) return interaction.reply("Lütfen sıfırdan yüksek bir değer girin!")
    if (miktar > para) return interaction.reply("Oynayacağınız miktar hesabınızda bulunmuyor!")

    const mapping = ["true","false"]
    const randomMapping = mapping[Math.floor(Math.random() * mapping.length)]
    
    if(randomMapping === "true") {
        interaction.reply(`Tebrikler kazandınız! Kazancınız ${miktar*2} TL`)
        db.add(`para_${interaction.user.id}`, miktar*2)
    } 
    if(randomMapping === "false") {
            interaction.reply(`Malesef kaybettiniz!`)
            db.substr(`para_${interaction.user.id}`, miktar)
    }

    },};