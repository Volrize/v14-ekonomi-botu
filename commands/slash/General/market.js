const discord = require("discord.js")
const db = require("wio.db")

module.exports = {
    name: "market",
    description: "Kumar Oynarsınız",
    type: 1,
    options: [],
    permissions: {
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages"
    },
run: async (client, interaction, config, db) => {


	const row = new discord.ActionRowBuilder()
    .addComponents(
            new discord.ButtonBuilder()
                .setCustomId('cips')
                .setLabel('Cips')
				.setEmoji("🥔")
                .setStyle("Success"),
				new discord.ButtonBuilder()
                .setCustomId('bisiklet')
                .setLabel('Bisiklet')
				.setEmoji("🚴‍♂️")
                .setStyle("Success"),
                new discord.ButtonBuilder()
                .setCustomId('araba')
				.setEmoji("🚙")
                .setLabel('Araba')
                .setStyle("Success"),
			     new discord.ButtonBuilder()
                .setCustomId('telefon')
				.setEmoji("📱")
                .setLabel('Telefon')
                .setStyle("Success"),
    );

const embed = new discord.EmbedBuilder()
    .setColor("Blue")
    .setFooter({ text: "Volrize Was Here ❤️"})
    .setTitle('Erdal Bakkal')
    .setDescription(`🥔 Cips: 15TL
	🚙 Araba: 450.000TL
	📱 Telefon: 40.000TL
	🚴‍♂️ Bisiklet: 500TL`);

return interaction.reply({embeds: [embed], components: [row] });

   


},};