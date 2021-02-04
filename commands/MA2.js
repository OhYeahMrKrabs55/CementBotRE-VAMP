const https = require('https');
const Discord = require('discord.js');
const url = 'https://www.reddit.com/r/MemeAsylum/hot/.json?limit=100';

module.exports = {
	name: 'ma',
	description: 'sends meme',
	execute(message, args) {

		https.get(url, (result) => {
			let body = '';
			result.on('data', (chunk) => {
				body += chunk;
			});

			result.on('end', () => {
				const response = JSON.parse(body);
				const index = response.data.children[Math.floor(Math.random() * 99) + 1].data;

				if (index.post_hint !== 'image') {

					// eslint-disable-next-line no-var
					var text = index.selftext;
					const textembed = new Discord.MessageEmbed()
						.setTitle(subRedditName)
						.setColor(9384170)
						.setDescription(`[${title}](${link})\n\n${text}`)
						.setURL(`https://reddit.com/${subRedditName}`);

					message.channel.send(textembed);
				}

				const image = index.preview.images[0].source.url.replace('&amp;', '&');
				// eslint-disable-next-line no-var
				var title = index.title;
				// eslint-disable-next-line no-var
				var link = 'https://reddit.com' + index.permalink;
				// eslint-disable-next-line no-var
				var subRedditName = index.subreddit_name_prefixed;

				if (index.post_hint !== 'image') {
					const textembed = new Discord.RichEmbed()
						.setTitle(subRedditName)
						.setColor(9384170)
						.setDescription(`[${title}](${link})\n\n${text}`)
						.setURL(`https://reddit.com/${subRedditName}`);

					message.channel.send(textembed);
				}
				console.log(image);
				const imageembed = new Discord.MessageEmbed()
					.setTitle(subRedditName)
					.setImage(image)
					.setColor(9384170)
					.setDescription(`[${title}](${link})`)
					.setURL(`https://reddit.com/${subRedditName}`);
				message.channel.send(imageembed);
			}).on('error', function(e) {
				console.log('Got an error: ', e);
			});
		});
	},
};