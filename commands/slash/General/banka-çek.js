const discord = require("discord.js")
const db = require("wio.db")

module.exports = {
    name: "banka-çek",
    description: "Bankadan TL çekersiniz",
    type: 1,
    options: [{
        name: "adet",
        description: "Çekeceğiniz TL miktarı",
        type: 3,
        required: true
    }],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
run: async (client, interaction, config, db) => {

    const para = db.fetch(`para_${interaction.user.id}`)
    const banka = db.fetch(`banka_${interaction.user.id}`)

const yatır = interaction.options.getString("adet")
   if (!Number(yatır)) return interaction.reply("Lütfen sayı giriniz!")
if (yatır > banka) return interaction.reply("Çekeceğiniz miktar banka hesabınızda bulunmamaktadır!")

db.add(`para_${interaction.user.id}`, yatır)
db.substr(`banka_${interaction.user.id}`, yatır)
     const kerem = new discord.EmbedBuilder()
     .setColor("Blue")
     .setFooter({ text: "Volrize Was Here ❤️"})
     .setDescription(`Başarıyla ${yatır} TL çektiniz!`)
return interaction.reply({embeds: [kerem]})


}, };