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
    const partyIdNum = Number(partyId);
    if (!Number.isInteger(partyIdNum)) {
        throw new Error(`partyId invalido ${partyId}`);
    }

    return prisma.$transaction(async (tx) => {
        const party = await tx.partida.findFirst({
            where: { id: partyIdNum, guild_id: guildId },
            select: { id: true, estado_partida: true }
        })

        if (!party) {
            throw new Error(`La partida a la que se quiere unir no existe.`)
        }

        const member = await tx.guildMember.findUnique({
            where: {
                usuario_id_guild_id: {
                    usuario_id: memberId,
                    guild_id: guildId
                }
            },
            select: { usuario_id: true },
        });

        if (!member) {
            throw new Error(`El usuario no esta registrado en esta guild`);
        }

        return tx.guildMember.update({
            where: {
                usuario_id_guild_id: {
                    usuario_id: memberId,
                    guild_id: guildId
                },
            },
            data: {
                partida: {
                    connect: {
                        id: party.id
                    }
                }
            },
            select: {
                usuario_id: true,
                guild_id: true,
                partida_id: true
            }
        })
    })
}

async function createDuelParty(guildId, memberId1, memberId2) {
    const j1 = await getPartyGuild(guildId, memberId1, 1);
    if (j1) return { response: "J1_IN_PARTY", party_id: null };
    const j2 = await getPartyGuild(guildId, memberId2, 1);
    if (j2) return { response: "J2_IN_PARTY", party_id: null };

    const nuevaPartida = await prisma.partida.create({
        data: {
            guild_id: guildId,
            juego_id: 1,
        },
        select: {
            id: true,
            juego_id: true
        }
    });

    await joinParty(guildId, nuevaPartida.id, memberId1);
    await joinParty(guildId, nuevaPartida.id, memberId2);

    return { response: "success", party_id: nuevaPartida.id };
}

async function declinaDuelParty(party_id) {
    const party = await prisma.partida.findFirst({
        where: { id: party_id }
    })

    if (!party) throw new Error(`No se encontro la partida`);

    return await prisma.partida.update({
        where: { id: party.id },
        data: { estado_partida: "declinado" }
    })
}

async function finalizaDuelParty(party_id) {
    const party = await prisma.partida.findFirst({
        where: { id: party_id }
    })

    if (!party) throw new Error(`No se encontro la partida`);

    return await prisma.partida.update({
        where: { id: party.id },
        data: { estado_partida: "finalizado" }
    })
}

module.exports = {
    getPartyGuild,
    joinParty,
    createDuelParty,
    declinaDuelParty,
    finalizaDuelParty
}