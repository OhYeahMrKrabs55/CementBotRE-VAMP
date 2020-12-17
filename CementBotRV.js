const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const { prefix, bot_age, words_array, bot_info } = require('./config.json');

client.once('ready', () =>{
	console.log(prefix);
	console.log(bot_age);
	console.log(words_array[0]);
	console.log(words_array[1]);
	console.log(words_array[2]);
	console.log(bot_info.name);
	console.log(bot_info.version);
	console.log(prefix);
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setPresence({
		status: 'online',
		game: {
			name: 'c! trolls eating cement',
			type: 'PLAYING',
		},
	},
	);
});
for(const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;
	const command = client.commands.get(commandName);

	if(!args.length) {
		const embed = new Discord.MessageEmbed()
			.setColor('#363833')
			.setTitle('PONG!')
			.setDescription('The troll will cover you in oil')
			.setFooter(`Requested by ${message.author.username}`)
			.addField('Code', '00X9', true)
			.addFields(
				{ name: 'why would you ping me?', value: 'No seriously, why? dont do it again.', inline: false },
			)
			.setTimestamp()
			.setImage('https://cdn.discordapp.com/attachments/602593912984567808/788823339287576637/abotimage.jpg')
			.setThumbnail('https://cdn.discordapp.com/emojis/727993272517001316.png');

		return message.channel.send(embed);
	}
	try {
		command.execute(message, args);
	}catch(error) {
		console.error(error);
		message.reply('there was an error executing this cmd');
	}
});
client.login(process.env.BOT_TOKEN);
const cement = ['https://cdn.discordapp.com/attachments/505861794066202644/780253680607035392/image0.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780253681063952404/image1.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780253681278779412/image2.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780253681479581746/image3.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780253681751687198/image4.jpg', 'https://cdn.discordapp.com/attachments/778730061129842708/780249212431761408/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780249269667627058/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780249349062000690/image0.gif', 'https://cdn.discordapp.com/attachments/778730061129842708/780249369202130995/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780249410201452544/image0.png', 'https://media.discordapp.net/attachments/778730061129842708/780249483182473226/video0.mp4', 'https://cdn.discordapp.com/attachments/590396924532883456/780273525239054356/meme.png', 'https://cdn.discordapp.com/attachments/675162643895681073/780540682652745748/4nkv7i.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780448056063164426/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780541443034185758/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780541443420586025/image1.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780541648597549116/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780541800271446066/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780542068040663050/image0.png'];
const basspro = ['https://cdn.discordapp.com/attachments/778730061129842708/780273860846682112/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780273861135433728/image1.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780273861378965514/image2.jpg', 'https://cdn.discordapp.com/attachments/778730061129842708/780273861639667712/image3.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780274366146412615/image1.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780274366436081684/image2.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780274367056576542/image4.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780274367304957972/image5.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780276571978072074/image0.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276572656762900/image1.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276572862152704/image2.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276573101883412/image3.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276573345021972/image4.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276573696950302/image5.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276573983080458/image6.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276574405525514/image7.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276574728749086/image8.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276574988664862/image9.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277369533497344/image0.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277369747275776/image1.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277369931431947/image2.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277370145079326/image3.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277370413121586/image4.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277370657308672/image5.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277370879344670/image6.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277371335868416/image8.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277371517403156/image9.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780278010880065536/image0.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780278011089387540/image1.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780278011273543690/image2.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780278011425587230/image3.jpg'];
const troll = ['https://cdn.discordapp.com/attachments/776155110174752778/778591521762050058/trollface.mp4', 'https://cdn.discordapp.com/attachments/728388280353292319/780565768018329630/EnIs410XEAAfnck.png', 'https://cdn.discordapp.com/attachments/728388280353292319/780565173613625364/EnhkXU9XcAIstA-.png', 'https://discordapp.com/channels/444346487002890260/728388280353292319/780577438572216341', 'https://cdn.discordapp.com/attachments/728388280353292319/780579971114205194/oil.png', 'https://cdn.discordapp.com/attachments/728388280353292319/780605453746176040/unknown.png', 'https://cdn.discordapp.com/attachments/313400507743862794/780463459182837820/a24kdhhrpdw41.png', 'https://cdn.discordapp.com/attachments/313400507743862794/780464042153476146/eg3ot512ox061.png', 'https://cdn.discordapp.com/attachments/313400507743862794/780496832882802708/Enf2DvTXEAAtPO3.png', 'https://cdn.discordapp.com/attachments/728388280353292319/780603866785382410/unknown.png', 'https://cdn.discordapp.com/attachments/728388280353292319/780604348782346260/unknown.png', 'https://cdn.discordapp.com/attachments/728388280353292319/780605629655416842/unknown.png', 'https://cdn.discordapp.com/attachments/728388280353292319/780606277776441374/unknown.png'];
const femur = ['https://cdn.discordapp.com/attachments/602593912984567808/780573397716566027/video0-6.mp4', 'https://cdn.discordapp.com/attachments/602593912984567808/780576220332425236/69102623_728667830889049_7985382097618252909_n.mp4', 'https://cdn.discordapp.com/attachments/602593912984567808/780576220726427658/1960315096806761539_5562344904.mp4', 'https://cdn.discordapp.com/attachments/728388280353292319/780577193033072680/video0.mov'];
const discordmods = ['https://tenor.com/view/discord-moderator-kitten-gif-18177005', 'https://tenor.com/view/discord-mods-discord-mods-discord-mods-be-like-gif-18886289', 'https://cdn.discordapp.com/attachments/728388280353292319/780580423805698048/image0.jpg', 'https://cdn.discordapp.com/attachments/728388280353292319/780580572032270336/image0.jpg'];


client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;
	const args2 = message.content.slice(prefix.length).trim().split(/ +/);
	const command2 = args2.shift().toLowerCase();

	if (command2 === 'args') {
		if(!args2.length) {
			return message.channel.send(`You have not specified any arguments ${message.author}`);
		}else if (args2[0] === 'cement') {
			return message.channel.send('Oil');
		}


		message.channel.send(`Command Name: ${command2}\nAruguments: ${args2}`);
	} else if(command2 === 'oil') {
		const taggedUser = message.mentions.users.first();
		message.channel.send(`Covers ${taggedUser.username} in oil`);
		return;
	}

	if(command2 === 'cement') {
		const cementembed = new Discord.MessageEmbed()
			.setColor('#363833')
			.setTitle('CementMeme')
			.setDescription('The troll will cover you in cement')
			.setFooter(`Requested by ${message.author.username}`)
			.setTimestamp()
			.setImage(cement [Math.floor(Math.random() * cement .length)]);
		message.channel.send(cementembed);
	}
	if(command2 === 'basspro') {
		const bassproembed = new Discord.MessageEmbed()
			.setColor('#363833')
			.setTitle('Basspro meme')
			.setDescription('Basspro Pyramid shop erp time')
			.setFooter(`Requested by ${message.author.username}`)
			.setTimestamp()
			.setImage(basspro [Math.floor(Math.random() * basspro .length)]);
		message.channel.send(bassproembed);
	}
	if(command2 === 'troll') {
		const trollembed = new Discord.MessageEmbed()
			.setColor('#363833')
			.setTitle('Trollface memes')
			.setDescription('Oil makes you fly')
			.setFooter(`Requested by ${message.author.username}`)
			.setTimestamp()
			.setImage(troll [Math.floor(Math.random() * troll .length)]);
		message.channel.send(trollembed);
	}
	if(command2 == 'femur') {
		const FemurEmbed = new Discord.MessageEmbed()
			.setColor('#363833')
			.setTitle('Femur Breaker memes')
			.setDescription('You femur will break')
			.setFooter(`Requested by ${message.author.username}`)
			.setTimestamp()
			.setImage(femur [Math.floor(Math.random() * femur .length)]);
		message.channel.send(FemurEmbed);
	}
	if(command2 === 'discordmods') {
		const discordmodembed = new Discord.MessageEmbed()
			.setColor('#363833')
			.setTitle('Discord mods')
			.setDescription('Bruh')
			.setFooter(`Requested by ${message.author.username}`)
			.setTimestamp()
			.setImage(discordmods [Math.floor(Math.random() * discordmods .length)]);
		message.channel.send(discordmodembed);
	}
	if(command2 === 'updatelog') {
		const discordmodembed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle('Completely Re-Vamped the bot time of the update is 6:52P.M')
			.setDescription('Check back often to see if any new updates are in!')
			.setFooter(`Requested by ${message.author.username}`)
			.setTimestamp();
		message.channel.send(discordmodembed);
	}
	if(command2 === 'cmds') {
		const discordmodembed = new Discord.MessageEmbed()
			.setColor('#23a118')
			.setTitle('List of commands')
			.setDescription('Check back often to see if any new updates are in!')
			.setFooter(`Requested by ${message.author.username}`)
			.setTimestamp()
			.addFields(
				{ name: 'c!cement', value: 'Drops a random cement meme', inline: false },
			)
			.addFields(
				{ name: 'c!ping', value: 'Pong this was a test command will add ms back later', inline: false },
			).addFields(
				{ name: 'c!basspro', value: 'Drops a random basspro meme', inline: false },
			).addFields(
				{ name: 'c!troll', value: 'Drops a random trollface meme.', inline: false },
			).addFields(
				{ name: 'c!femur', value: 'Drops a random femur breaker meme.', inline: false },
			).addFields(
				{ name: 'c!discordmods', value: 'Drops a random discordmod meme.', inline: false },
			).addFields(
				{ name: 'c!oil', value: 'Cover your enemies in oil', inline: false },
			)
			.addFields(
				{ name: 'c!updatelog', value: 'See if any new commands have been added', inline: false },
			)
			.addFields(
				{ name: 'c!brazil', value: 'Send a person of your choice to brazil!', inline: false },
			)
			.setTimestamp()
			.setImage('https://cdn.discordapp.com/attachments/602593912984567808/788823339287576637/abotimage.jpg');
		message.channel.send(discordmodembed);
	}
	const taggedUser2 = message.mentions.users.first();
	if(command2 === 'brazil') {
		const discordmodembed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle('Your going to brazil')
			.setDescription(`${message.author} has just sent ${taggedUser2.username} to brazil!`)
			.setFooter('Enjoy Brazil')
			.setImage('https://cdn.discordapp.com/attachments/409067622689406979/788915989718368286/AABrizilfalg.png')
			.setTimestamp();
		message.channel.send(discordmodembed);
	}

});