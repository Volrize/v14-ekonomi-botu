const { EmbedBuilder, PermissionsBitField, codeBlock } = require("discord.js");
const client = require("../../index");
const config = require("../../config/config.js");
const {
    JsonDatabase
} = require("wio.db");

const db = new JsonDatabase({
  databasePath:"./databases/databases.json"
});


module.exports = {
  name: "messageCreate"
};

client.on('messageCreate', async (message) => {
  if (message.channel.type !== 0) return;
  if (message.author.bot) return;

  let command = client.prefix_commands.get(cmd);

  if (!command) return;

  if (command) {
    if (command.permissions) {
      if (!message.member.permissions.has(PermissionsBitField.resolve(command.permissions || []))) return message.reply({
        embeds: [
          new EmbedBuilder()
            .setDescription(`🚫 Unfortunately, you are not authorized to use this command.`)
            .setColor("Red")
        ]
      })
    };

    if (command.owner, command.owner == true) {
      if (config.Users?.OWNERS) {
        const allowedUsers = []; // New Array.

        config.Users.OWNERS.forEach(user => {
         const fetchedUser = message.guild.members.cache.get(user);
          if (!fetchedUser) return allowedUsers.push('*Unknown User#0000*');
          allowedUsers.push(`${fetchedUser.user.tag}`);
        })

        if (!config.Users.OWNERS.some(ID => message.member.id.includes(ID))) return message.reply({
          embeds: [
            new EmbedBuilder()
              .setDescription(`🚫 Sorry but only owners can use this command! Allowed users:\n**${allowedUsers.join(", ")}**`)
              .setColor("Red")
          ]
        })
      }
    };

    try {
      command.run(client, message, args, prefix, config, db);
    } catch (error) {
      console.error(error);
    };
  }
});
