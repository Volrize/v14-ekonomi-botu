const discord = require("discord.js")
const db = require("wio.db")
const sd = new Set(); //kodun en üstüne

module.exports = {
    name: "çalış",
    description: "Bir işte çalışırsınız",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
run: async (client, interaction, config, db) => {
	

if (sd.has(interaction.user.id)) {
interaction.reply("5 dakikada bir çalışabilirsiniz!");
} else {
sd.add(interaction.user.id);
setTimeout(() => {
sd.delete(interaction.user.id);
}, 300000);
    }
	
asld()
async function asld() {
    
      let miktarsonuç = Math.floor(Math.random() * 3000) + 1
if (miktarsonuç < 1001) {
asld();
return;
}
    var sebep = ["Tadilatçı olarak çalıştı","Emlakçı olarak çalıştın","Aşçı olarak çalıştın","Bakkal olarak çalıştın","Blogger olarak çalıştın","Yazılımcı olarak çalıştın","Borsacı olarak çalıştın","Borucu olarak çalıştın","Eczacı olarak çalıştın","Davulcu olarak çalıştın","Öğretmen olarak çalıştın"]
    var sebepsonuç = sebep[Math.floor(Math.random() * sebep.length)];
  db.add(`para_${interaction.user.id}`, miktarsonuç)
    const kerem = new discord.EmbedBuilder()
    .setColor("Blue")
    .setFooter({ text: "Volrize Was Here ❤️"})
    .setDescription(`${sebepsonuç} ve ${miktarsonuç} TL kazandın`)
    return interaction.reply({embeds: [kerem]})
    }
    
    
},
};