const { Events } = require('discord.js');
const { usuarioService } = require('../../services');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);
		const user = interaction.user;
		const guild = interaction.guild;

		let memberData = await usuarioService.getDiscordUserInGuild(guild.id, user.id);
		if (!memberData) {
			memberData = await usuarioService.getDiscordUser(user.id);
			if (!memberData) await usuarioService.createDiscordUser(user.id);
			await usuarioService.createDiscordUserInGuild(guild.id, user.id);
		}

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'Hubo un error al ejecutar este comando.', ephemeral: true });
			} else {
				await interaction.reply({ content: 'Hubo un error al ejecutar este comando.', ephemeral: true });
			}
		}
	},
};