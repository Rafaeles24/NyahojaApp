const { prisma } = require("../prisma/client");

async function getPartyGuild(guildId, memberId, gameId) {
    return await prisma.partida.findFirst({
        where: {
            guild_id: guildId,
            juego_id: gameId,
            estado_partida: "espera",
            miembros: {
                some: {
                    usuario_id: memberId,
                    guild_id: guildId
                }
            }
        }
    });
}

async function joinParty(guildId, partyId, memberId) {
    await prisma.guildMember.update({
        where: {
            guild_id_usuario_id: {
                guild_id: guildId,
                usuario_id: memberId
            }
        },
        data: {
            partida_id: null
        }
    })

    return await prisma.guildMember.update({
        where: {
            guild_id_usuario_id: {
                guild_id: guildId,
                usuario_id: memberId
            }
        },
        data: {
            partida_id: partyId
        }
    })
}

async function createDuelParty(guildId, memberId1, memberId2) {
    const j1 = await getPartyGuild(guildId, memberId1, 1);
    if (j1) return { response: "J1_IN_PARTY" };
    const j2 = await getPartyGuild(guildId, memberId2, 1);
    if (j2) return { response: "J2_IN_PARTY" };

    return prisma.$transaction(async (tx) => {
        const nuevaPartida = await tx.partida.create({
            data: {
                guild_id: guildId,
                juego_id: 1,
            },
        })

        await joinParty(guildId, nuevaPartida.id, memberId1);
        await joinParty(guildId, nuevaPartida.id, memberId2);

        return nuevaPartida;
    })
}

module.exports = {
    getPartyGuild,
    joinParty,
    createDuelParty
}