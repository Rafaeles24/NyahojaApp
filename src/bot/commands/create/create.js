const { SlashCommandBuilder } = require("discord.js");
const { usuarioService, guildService } = require("../../../services");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("guild")
        .setDescription("Create guild"),
    
    async execute(interaction) {
        const guild = interaction.guild;

        const guildData = await guildService.getGuild(guild.id);
        if (!guildData) await guildService.createGuild(guild.id);

        return interaction.reply({
            content: `Guild ${guild.id} registrado`
        })
    }
}