const discord = require("discord.js")
const db = require("wio.db")

module.exports = {
    name: "market",
    description: "Kumar OynarsΔ±nΔ±z",
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
				.setEmoji("π₯")
                .setStyle("Success"),
				new discord.ButtonBuilder()
                .setCustomId('bisiklet')
                .setLabel('Bisiklet')
				.setEmoji("π΄ββοΈ")
                .setStyle("Success"),
                new discord.ButtonBuilder()
                .setCustomId('araba')
				.setEmoji("π")
                .setLabel('Araba')
                .setStyle("Success"),
			     new discord.ButtonBuilder()
                .setCustomId('telefon')
				.setEmoji("π±")
                .setLabel('Telefon')
                .setStyle("Success"),
    );

const embed = new discord.EmbedBuilder()
    .setColor("Blue")
    .setFooter({ text: "Volrize Was Here β€οΈ"})
    .setTitle('Erdal Bakkal')
    .setDescription(`π₯ Cips: 15TL
	π Araba: 450.000TL
	π± Telefon: 40.000TL
	π΄ββοΈ Bisiklet: 500TL`);

return interaction.reply({embeds: [embed], components: [row] });

   


},};