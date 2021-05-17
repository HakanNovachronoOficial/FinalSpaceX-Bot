module.exports = {
	/* The token of your Discord Bot */
	token: "NzM4MjQ4OTE1Mjg3MTQ2NjU2.XyJJ4Q.6_Rak4J5T2BUJkAR7AYKf26mKkA",
	/* For the support server */
	support: {
		id: "", // The ID of the support server
		logs: "", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "", // Your discord client secret
		baseURL: "", // The base URl of the dashboard
		logs: "", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "", // Express session password (it can be what you want)
		failureURL: "" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb+srv://admin:<qxHDd9mz4sCbTFgt>@cluster0.1bxwz.mongodb.net/Cluster0?retryWrites=true&w=majority", // The URl of the mongodb database
	prefix: "v!", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "#0091fc", // The default color for the embeds
		footer: "Hakan Novachrono | Bot's Oficial" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "277671488440631297", // The ID of the bot's owner
		name: "Hakan Novachrono#0001" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "", // The webhook auth that you have defined on discordbots.org
		channel: "" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "UPUFHA4BF9lYlqrG.51tWL3Asi0lIKc9oDn_4pXZCcI0.y_7Jjt.iqYy0wHn1uw_",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "7a70a5fd-baee-4eb9-8636-d8d901ac38db",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "5ab16c0e5f957f27504aa4e4",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "fb4020bba1f9099d438e601eda609d0280fd21654e8228c9555aa6432e96258ed550f31e62c5a60cc1afc2c0d8c97e9f17102d56af2cbd80819c982027fe0227",
		// SENTRY: https://sentry.io (this is not required and not recommended)
		sentryDSN: ""
	},
	/* The others utils links */
	others: {
		github: "https://github.com/HakanNovachrono", // Founder's github account
		donate: "https://patreon.com/HakanNovachrono" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "Hakan Novachrono <= Criador",
			type: "LISTENING"
		},
		{
			name: "Prefixo v!",
			type: "PLAYING"
		}
	],
	/* Language configuration */
	languages: [
		{
			name: "en-US",
			nativeName: "English",
			moment: "en",
			defaultMomentFormat: "MMMM Do YYYY",
			default: false,
			aliases: [
				"English",
				"en",
				"en-us",
				"en_us",
				"en_US"
			]
		},
		{
			name: "fr-FR",
			nativeName: "Français",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "fr",
			default: false,
			aliases: [
				"French",
				"français",
				"francais",
				"fr",
				"fr_fr"
			]
		},
		{
			name: "es-ES",
			nativeName: "Español",
			defaultMomentFormat: "MMM Do, YYYY",
			moment: "es",
			default: false,
			aliases: [
				"Spanish",
				"es",
				"es_es"
			]
		},
		{
			name: "it-IT",
			nativeName: "Italiano",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "it",
			default: false,
			aliases: [
				"Italian",
				"it",
				"it_it"
			]
		},
		{
			name: "nl-NL",
			nativeName: "Nederlands",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "nl",
			default: false,
			aliases: [
				"Dutch",
				"nl",
				"nl_nl"
			]
		},
		{
			name: "pt-PT",
			nativeName: "Português",
			defaultMomentFormat: "Do MMMM YYYY",
			moment: "pt",
			default: true,
			aliases: [
				"Portuguese",
				"pt",
				"pt_pt"
			]
		}
	]
};
