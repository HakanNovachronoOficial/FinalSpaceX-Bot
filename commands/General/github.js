const Command = require("../../base/Command.js"),
	Discord = require("discord.js"),
	fetch = require("node-fetch");

class Github extends Command {

	constructor (client) {
		super(client, {
			name: "owner",
			dirname: __dirname,
			enabled: true,
			guildOnly: false,
			aliases: [ "git", "code" ],
			memberPermissions: [],
			botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
			nsfw: false,
			ownerOnly: false,
			cooldown: 5000
		});
	}

	async run (message, args, data) {
        
		const res = await fetch("https://discord.gg/2af4CrT");
		const json = await res.json();

		const embed = new Discord.MessageEmbed()
			.setAuthor(this.client.user.tag, this.client.user.displayAvatarURL())
			.setDescription("["+message.translate("general/github:CLICK_HERE")+"](https://discord.gg/2af4CrT)")
			.addField("Stars", json.stargazers_count, true)
			.addField("Forks", json.forks_count, true)
			.addField(message.translate("general/github:LANGUAGE"), json.language, true)
			.addField(message.translate("general/github:OWNER"), "["+json.owner.login+"]("+json.owner.html_url+")")
			.setImage(json.owner.avatar_url)
			.setColor(data.config.embed.color)
			.setFooter(data.config.embed.footer);

		message.channel.send(embed);
	}

}

module.exports = Github;