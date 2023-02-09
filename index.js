const { Client, Partials, Collection, GatewayIntentBits } = require('discord.js');
const discord = require("discord.js")
const config = require('./config/config');
const {
    JsonDatabase
} = require("wio.db");

const db = new JsonDatabase({
  databasePath:"./databases/databases.json"
});
const colors = require("colors");

// Creating a new client:
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent
  ],
  partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.Reaction
  ],
  presence: {
    activities: [{
      name: "Volrize Eko",
      type: 0
    }],
    status: 'dnd'
  }
});

// Host the bot:
require('http').createServer((req, res) => res.end('Ready.')).listen(3000);

// Getting the bot token:
const AuthenticationToken = process.env.TOKEN || config.Client.TOKEN;
if (!AuthenticationToken) {
  console.warn("[HATA] Lütfen `config/config.js` yoluna gidip Discord Botunuzun tokenini giriniz.".red)
  return process.exit();
};

// Handler:
client.slash_commands = new Collection();
client.events = new Collection();

module.exports = client;

["application_commands", "events"].forEach((file) => {
  require(`./handlers/${file}`)(client, config);
});

// Login to the bot:
client.login(AuthenticationToken)
  .catch((err) => {
    console.error("[HATA] Botunuza bağlanırken bir şeyler ters gitti...");
    console.error("[HATA] Discord API hatası:" + err);
    return process.exit();
  });

// Handle errors:
process.on('unhandledRejection', async (err, promise) => {
  console.error(`[ANTI-CRASH] Handler hatası: ${err}`.red);
  console.error(promise);
});


//////////market

client.on(discord.Events.InteractionCreate, interaction => {
	
	const para = db.fetch(`para_${interaction.user.id}`)
	
if (!interaction.isButton()) return;
if (interaction.customId == "araba") {
	if (para < 450000) return interaction.reply("Malesef bakiyeniz yetmiyor!")
	db.substr(`para_${interaction.user.id}`, 450000)
  db.set(`araba_${interaction.user.id}`, "Var")
  interaction.reply(`<@${interaction.user.id}>  Başarıyla 1.4 Toyota Corolla aldın!`)

}
if (interaction.customId == "bisiklet") {
	if (para < 500) return interaction.reply("Malesef bakiyeniz yetmiyor!")
	db.substr(`para_${interaction.user.id}`, 500)
  db.set(`bisiklet_${interaction.user.id}`, "Var")
  interaction.reply(`<@${interaction.user.id}>  Başarıyla Bisiklet aldın!`)

}
if (interaction.customId == "cips") {
	if (para < 15) return interaction.reply("Malesef bakiyeniz yetmiyor!")
	db.substr(`para_${interaction.user.id}`, 15)
  interaction.reply(`<@${interaction.user.id}> Başarıyla Cips aldıp yedin!`)
}
if (interaction.customId == "telefon") {
	if (para < 40000) return interaction.reply("Malesef bakiyeniz yetmiyor!")
	db.substr(`para_${interaction.user.id}`, 40000)
	  db.set(`telefon_${interaction.user.id}`, "Var")
  interaction.reply(`<@${interaction.user.id}> Başarıyla İphone 14 Pro aldıp yedin!`)
}
})