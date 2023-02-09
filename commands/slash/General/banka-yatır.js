const discord = require("discord.js")
const db = require("wio.db")

module.exports = {
    name: "banka-yatır",
    description: "Bankaya TL yatırırsınız",
    type: 1,
    options: [{
        name: "adet",
        description: "Yatıracağınız TL miktarı",
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
if (yatır > para) return interaction.reply("Yatıracağınız miktar cebinizde bulunmamaktadır!")

db.substr(`para_${interaction.user.id}`, yatır)
db.add(`banka_${interaction.user.id}`, yatır)
    const kerem = new discord.EmbedBuilder()
    .setColor("Blue")
    .setFooter({ text: "Volrize Was Here ❤️"})
    .setDescription(`Başarıyla ${yatır} TL banka hesabınıza yatırıldı!`)
return interaction.reply({embed: [kerem]})


}, };