const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Airdrops NFT'),
	async execute(interaction) {
		await interaction.reply("Hello World!");
	},
};
