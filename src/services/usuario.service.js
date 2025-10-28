const { prisma } = require("../prisma/client");

async function getDiscordUser(discordId) {
    return await prisma.usuario.findUnique({
        where: { discord_id: discordId }
    })
}

async function getDiscordUserInGuild(guildId, userId) {
    return await prisma.guildMember.findFirst({
        where: { 
            guild_id: guildId,
            usuario_id: userId
        }
    })
}

async function getDiscordUsersInGuild(guildId) {
    return await prisma.guildMember.findMany({
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

async function createDiscordUserInGuild(guildId, userId) {
    return await prisma.guildMember.upsert({
        where: {
            usuario_id_guild_id: {
                usuario_id: userId,
                guild_id: guildId,
            }
        },
        update: {},
        create: {
            guild: {
                connectOrCreate: {
                    where: { discord_id: guildId },
                    create: { discord_id: guildId }
                }
            },
            usuario: {
                connectOrCreate: {
                    where: { discord_id: userId },
                    create: { discord_id: userId }
                }
            }
        }
    })
}

module.exports = {
    getDiscordUser,
    getDiscordUserInGuild,
    getDiscordUsersInGuild,
    createDiscordUser,
    createDiscordUserInGuild
}