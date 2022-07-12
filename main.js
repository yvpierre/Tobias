"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { REST } = require('@discordjs/rest');
const { Routes, Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const commands = [
    {
        name: 'ping',
        description: 'Renvoie pong',
    }
];
const rest = new REST({ version: '10' }).setToken('token');
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('refresh en cours');
        yield rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });
        console.log('refresh bien effecuté');
    }
    catch (error) {
        console.error(error);
    }
}))();
client.on('ready', () => {
    console.log('logged in as ${client.user.tag}');
});
client.on('interactionCreate', (interaction) => __awaiter(void 0, void 0, void 0, function* () {
    if (!interaction.isChatInputCommand())
        return;
    if (interaction.commandName === 'ping') {
        yield interaction.reply('Pong!');
    }
}));
client.login('token');
