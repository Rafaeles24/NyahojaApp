const { prisma } = require("../prisma/client");

async function getDiscordUser(discordId) {
    return await prisma.usuario.findUnique({
        where: { discord_id: discordId }
    })
}

async function getDiscordUsersInGuild(guildId) {
    return await prisma.usuarios_en_guild.findMany({
        where: { guild_id: guildId }
    })
}

async function createDiscordUser(discordId) {
    return await prisma.usuario.create({
        data: {
            discord_id: discordId
        }
    })
}

module.exports = {
    getDiscordUser,
    getDiscordUsersInGuild,
    createDiscordUser
}