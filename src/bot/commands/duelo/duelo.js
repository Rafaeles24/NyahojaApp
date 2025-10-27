const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ComponentType } = require("discord.js");
const { usuarioService, partidaService } = require("../../../services");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("duelo")
        .setDescription("Reta a un duelo de tiros a cualquiera de este servidor")
        .addUserOption(o => o.setName("target").setDescription("Usuario que quieres retar").setRequired(true)),

    async execute(interaction) {
        const retador = interaction.user;
        const target = interaction.options.getUser("target");
        const guild = interaction.guild;

        if (retador.id === target.id) {
            return interaction.reply({ content: ``, ephemeral: true });
        }

        //Verificar si el retado esta registrado
        let targetVerify = await usuarioService.getDiscordUserInGuild(guild.id, target.id);
        if (!targetVerify) {
            targetVerify = await usuarioService.getDiscordUser(target.id);
            if (!targetVerify) await usuarioService.createDiscordUser(target.id);
            await usuarioService.createDiscordUserInGuild(guild.id, user.id);
        }

        const party = await partidaService.createDuelParty(guild.id, retador.id, target.id);

        if (party.response === "J1_IN_PARTY") {
            return await interaction.reply({
                content: `Ya te encuentras en un duelo activo`,
                ephemeral: true
            });
        } else if (party.response === "J2_IN_PARTY") {
            return await interaction.reply({
                content: `El usuario objetivo ya se encuentra en un duelo activo`,
                ephemeral: true
            });
        }

        const aceptar = new ButtonBuilder().setCustomId("duelo_accept").setLabel("Aceptar duelo").setStyle(ButtonStyle.Success);
        const rechazar = new ButtonBuilder().setCustomId("duelo_decline").setLabel("Declinar").setStyle(ButtonStyle.Secondary);
        const row = new ActionRowBuilder().addComponents(aceptar, rechazar);

        const message = await interaction.reply({
            content: `${target}, **${retador.globalName ?? retador.username}** te ha retado. ¿Aceptas el duelo?`,
            components: [row],
            fetchReply: true
        });

        const collector = message.createMessageComponentCollector({
            componentType: ComponentType.Button,
            filter: (i) => i.message.id === message.id,
            time: 30_000,
            max: 1
        });

        const disableAll = (rows) =>
            rows.map(r =>
                new ActionRowBuilder().addComponents(r.components.map(c => ButtonBuilder.from(c).setDisabled(true)))
            );

        collector.on("collect", async (i) => {
            try {
                if (i.user.id !== target.id) {
                    return i.reply({ content: `Solo ${target} puede responder este duelo.`, ephemeral: true });
                }
        
                if (i.customId === "duelo_accept") {
                    await i.update({
                        content: `✅ ${i.user} **aceptó** el duelo contra ${retador}! Prepárense...`,
                        components: [] 
                    });
                } else if (i.customId === "duelo_decline") {
                    await i.update({
                        content: `❎ ${i.user} **rechazó** el duelo de ${retador}.`,
                        components: []
                    });
                }
        
                collector.stop("answered");
            } catch (error) {
                console.error("Error manejando el click:", error); 
                if (!i.replied && !i.deferred) {
                    await i.update({
                        content: "Ocurrió un error al procesar tu elección.",
                        components: disableAll(message.components)
                    });
                }
            }
        });

        collector.on("end", async (_c, reason) => {
            if (reason === "time" && message.editable) {
                await message.edit({
                    content: `⏳ ${target} no respondió al reto de ${retador}.`,
                    components: disableAll(message.components)
                });
            }
        });
    }
};