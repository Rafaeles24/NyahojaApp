const { Events } = require("discord.js");
const { guildService } = require("../../services");

module.exports = {
    name: Events.GuildCreate,
    async execute(guild) {
        try {
            const owner = await guild.fetchOwner().catch(() => null);
            const guildData = await guildService.getGuild(guild.id);
            const channel = guild.systemChannel || guild.channel.cache.find(c => c.isTextBased() && c.permissionsFor(guild.members.me).has("SendMessages"));
            if (!guildData) {
                await guildService.createGuild(guild.id);
                console.log(`🟢 Servidor nuevo registrado: ${guild.name} (${guild.id}) — miembros: ${guild.memberCount} — owner: ${owner?.user?.tag ?? 'N/D'}`);
                if (channel) return await channel.send('👋 ¡Hola! Me da mucho gusto estar aqui, espero ser de su agrado  ');
            }
            console.log(`🟢 Servidor reingresado: ${guild.name} (${guild.id}) — miembros: ${guild.memberCount} — owner: ${owner?.user?.tag ?? 'N/D'}`);
            if (channel) return await channel.send('👋 ¡Hola! He vuelto por mas aventuras :D');
        } catch (error) {
            console.error('Error en guildCreate:', error);
        }
    }
}