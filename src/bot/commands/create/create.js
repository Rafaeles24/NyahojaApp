const { SlashCommandBuilder } = require("discord.js");
const { usuarioService } = require("../../../services");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("guild")
        .setDescription("Create guild"),
    
    async execute(interaction) {
        const user = interaction.user;

        await usuarioService.createDiscordUser(user.id);

        return interaction.reply({
            content: `Guild ${user.id} registrado`
        })
    }
}