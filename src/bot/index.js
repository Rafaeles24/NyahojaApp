const { Client, GatewayIntentBits, Collection, REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const services = require('../services');
require('dotenv').config()

const token = process.env.TOKEN;
const clientId = process.env.CLIENTID;

//DEFINIR EL BOT COMO CLIENT
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers]});

// LEYENDO CARPETA DE COMANDOS
client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

const commands = [];
// Grab all the command folders from the commands directory you created earlier

for (const folder of commandFolders) {
	// Grab all the command files from the commands directory you creatfed earlier
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			commands.push(command.data.toJSON());
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

// CONSTRUYE Y PREPARA UNA INSTACION CON EL MODULO REST
const rest = new REST().setToken(token);

// DESPLEGAR COMANDOS
(async () => {
	try {
		console.log(`[COMANDOS] Iniciando recarga de ${commands.length} comandos (/) de aplicacion.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationCommands(clientId),
			{ body: commands },
		);

        

		console.log(`[COMANDOS] Recarga con exito de ${data.length} comandos (/) de aplicacion.`);
	} catch (error) {
		// SI ALGO FUERA DE LO NORMAL SUCEDE, CAPTURA EL ERROR
		console.error(error);
	}
})();
// LEYENDO CARPETA DE COMANDOS FIN

// LEYENDO CARPETA DE EVENTOS
client.events = new Collection();

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

let eventCount = 0;

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
    eventCount++;
}

console.log(`[EVENTOS] Se han registrado y ejecutado ${eventCount} eventos.`);
// LEYENDO CARPETA DE EVENTOS FIN

// BOT LOGUEANDOSE A LA APLICACION NYAHOJA
module.exports = client;
client.login(token);