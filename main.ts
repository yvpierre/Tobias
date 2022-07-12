const { REST } = require('@discordjs/rest')
const { Routes, Client, GatewayIntentBits } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds]})

const commands = [
    {
        name: 'ping',
        description: 'Renvoie pong',
    }
]

const rest = new REST({ version: '10'}).setToken('token');

(async () => {
    try {
        console.log('refresh en cours')

        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands})

        console.log('refresh bien effecuté')
    } catch (error) {
        console.error(error)
    }
})();

client.on('ready', () => {
    console.log('logged in as ${client.user.tag}')
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return

    if(interaction.commandName === 'ping') {
        await interaction.reply('Pong!')
    }

})

client.login('token')