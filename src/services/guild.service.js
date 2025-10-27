const { prisma } = require("../prisma/client");

async function getGuild(guildId) {
    return await prisma.guild.findUnique({
        where: { discord_id: guildId }
    });
}

async function getGuilds() {
    return await prisma.guild.findMany();
}

async function createGuild(guildId) {
    return await prisma.guild.create({
        data: {
            discord_id: guildId
        }
    });
}

module.exports = {
    getGuild,
    getGuilds,
    createGuild
}