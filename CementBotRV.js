'use strict';
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
	client.user.setActivity('cmt!help');
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
const cement = ['https://cdn.discordapp.com/attachments/729195359104008192/790388680715796500/image0.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780253680607035392/image0.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780253681063952404/image1.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780253681278779412/image2.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780253681479581746/image3.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780253681751687198/image4.jpg', 'https://cdn.discordapp.com/attachments/778730061129842708/780249212431761408/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780249269667627058/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780249349062000690/image0.gif', 'https://cdn.discordapp.com/attachments/778730061129842708/780249369202130995/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780249410201452544/image0.png', 'https://media.discordapp.net/attachments/778730061129842708/780249483182473226/video0', 'https://cdn.discordapp.com/attachments/590396924532883456/780273525239054356/meme.png', 'https://cdn.discordapp.com/attachments/675162643895681073/780540682652745748/4nkv7i.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780448056063164426/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780541443034185758/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780541443420586025/image1.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780541648597549116/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780541800271446066/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780542068040663050/image0.png'];
const basspro = ['https://cdn.discordapp.com/attachments/729195359104008192/790388749279428608/image0.jpg', 'https://cdn.discordapp.com/attachments/778730061129842708/780273860846682112/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780273861135433728/image1.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780273861378965514/image2.jpg', 'https://cdn.discordapp.com/attachments/778730061129842708/780273861639667712/image3.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780274366146412615/image1.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780274366436081684/image2.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780274367056576542/image4.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780274367304957972/image5.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780276571978072074/image0.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276572656762900/image1.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276572862152704/image2.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276573101883412/image3.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276573345021972/image4.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276573696950302/image5.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276573983080458/image6.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276574405525514/image7.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276574728749086/image8.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276574988664862/image9.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277369533497344/image0.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277369747275776/image1.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277369931431947/image2.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277370145079326/image3.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277370413121586/image4.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277370657308672/image5.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277370879344670/image6.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277371335868416/image8.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277371517403156/image9.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780278010880065536/image0.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780278011089387540/image1.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780278011273543690/image2.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780278011425587230/image3.jpg'];
const troll = ['https://cdn.discordapp.com/attachments/729195359104008192/790388620484935740/image2.png', 'https://cdn.discordapp.com/attachments/729195359104008192/790388620309168218/image1.jpg', 'https://cdn.discordapp.com/attachments/729195359104008192/790388619772559370/image0.jpg', 'https://cdn.discordapp.com/attachments/728388280353292319/780565768018329630/EnIs410XEAAfnck.png', 'https://cdn.discordapp.com/attachments/728388280353292319/780565173613625364/EnhkXU9XcAIstA-.png', 'https://discordapp.com/channels/444346487002890260/728388280353292319/780577438572216341', 'https://cdn.discordapp.com/attachments/728388280353292319/780579971114205194/oil.png', 'https://cdn.discordapp.com/attachments/728388280353292319/780605453746176040/unknown.png', 'https://cdn.discordapp.com/attachments/313400507743862794/780463459182837820/a24kdhhrpdw41.png', 'https://cdn.discordapp.com/attachments/313400507743862794/780464042153476146/eg3ot512ox061.png', 'https://cdn.discordapp.com/attachments/313400507743862794/780496832882802708/Enf2DvTXEAAtPO3.png', 'https://cdn.discordapp.com/attachments/728388280353292319/780603866785382410/unknown.png', 'https://cdn.discordapp.com/attachments/728388280353292319/780604348782346260/unknown.png', 'https://cdn.discordapp.com/attachments/728388280353292319/780605629655416842/unknown.png', 'https://cdn.discordapp.com/attachments/728388280353292319/780606277776441374/unknown.png'];
const femur = [''];
const Buffies = ['https://cdn.discordapp.com/attachments/728388280353292319/791455299525410826/1601041537710.gif', 'https://cdn.discordapp.com/attachments/728388280353292319/791454922596024330/f02d8797d11905d436b399a0ff72baaf.jpg', 'https://cdn.discordapp.com/attachments/728388280353292319/791456652704350218/IMG_20201020_093339_476.jpg', 'https://cdn.discordapp.com/attachments/728388280353292319/791456788544225290/image0.png', 'https://cdn.discordapp.com/attachments/690732168493662250/791460633664684032/jn9srph28p661-1-1.png', 'https://cdn.discordapp.com/attachments/690732168493662250/791460635442675712/8i194urorsz51.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460635762229298/ddb7al3-2a4101fd-bbfe-4f29-b235-33eb672d9f12.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460636042330153/38a.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460636403433492/770.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460636818538506/089.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460637246881842/957196_zakusiii_bea.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460637531308053/bea_by_neoartcore_ddb9g5a-pre.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460637934223420/7d2664fd7d37a54e3c82f099275d384e.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460638358372382/1008607_mootium_bea-pokemon.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460709477122078/a4b.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460709807423488/5oe8cchkt0q31.png', 'https://cdn.discordapp.com/attachments/690732168493662250/791460710147948554/Vo1p6A3.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460710491488276/Mirukohttpthegreatpeanuttumblrcompost176180244754mirukosavedmylife_0147c4_6733534.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460710831357962/012889e2c40d83ba34aa5bfe464e0048.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460711057326110/van-lawrence-ching-vanlawrenceching-fanart-pokemon-bea-001-sat.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460711653179462/cd6e416a156bb527a66ed7ccc9327ceb.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460711914012713/0ed83d88d7773de2f4a15ee9a8681604.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791748341474000896/qlFr9vO.png', 'https://cdn.discordapp.com/attachments/690732168493662250/791754258667405342/7dNXDmD.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754259170852914/images_7.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754259406127123/tumblr_pu34xgpEhk1rvmq7jo1_1280.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754259967246397/images_6.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754260315897876/unnamed.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754260726546452/download.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754261067071498/sample-fac8b4d11d03c13dea401968ab7db9de.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754261544304651/EV0BA5xVAAAXbMy.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754262408462376/50e7cb38a008dbc8243eb2d677b1cd45.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754309145722940/kba7y02fcly41.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754309632131082/d1df79fb747852b0a9f414386edd5578.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754310173065246/images_4.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754310438354944/04e.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754310706659338/c7a4eacff02428f9b143aa3c942a42f8.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754310971162684/80f3ae039e467dff54849b3ccd246478.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754311243661322/1adc7e222735fe1d0030e26504bad459.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754311536476201/EMBGS6wWwAANCp2.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754311881064468/0fc81870fe31f7c5dd95347d161659d8.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754312224079902/images_3.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754381644660766/sample-ab216afc428b70733719f301c296482a.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754382076805140/vkP8jk5.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754382428733450/84KN9ZfLwSMVEmdL9B5otTxFSurIEB0Pzw1WCOGEfNo.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754382664138772/fcb.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754382860615710/bd0149d96e2b2a235314122c2a2bc25a.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754383318319124/97a5e4de7ba73f66dabe4ff37d5e6ab4.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754383606939678/Coj4qIFXEAA9esU.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754383850733568/a16b703b7748b2f00ed7017c9b8f96ab.png', 'https://cdn.discordapp.com/attachments/690732168493662250/791754384160849930/9b425451dc5eb21f9560b33323bbce54.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754384702046238/images_2.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754460203974756/120fe64abbe4ff24ce3d9062534e8308.png', 'https://cdn.discordapp.com/attachments/690732168493662250/791754460580937758/Daidoujisenrankagura_1ca9922cc5087cd8e108ba6bf5144134.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754460917137418/anime_muscle_girl_2_by_vajter_dcw38ea-350t.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754461138649128/images_1.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754461332242482/Dk7wzQuVsAAkCT9.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754461600940053/DljhDY2U4AAuQo4.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754461810917416/Du2xyCtU0AA9_n_.jpg_large.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754462510841923/dda2xum-9042a524-bf07-4314-86f7-400eb7023761.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754462829084742/l5kvAqRXrNZq6hc-AvqaFdnHa0hqInLUHww0vVwwTWs.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754463035654184/tumblr_p86ux0bvFJ1s8esvho1_1280.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754500440064040/a3b4160a26aa58255c41d22b16882f4e.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754500682547200/817.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791757122102755398/7c2b55b24d1212f9cbac181413e95b4b.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791757122639233024/ihx3_6K6-UYV8AMmS_VgrZp8YZs-1FQSUMSLsBRKMf0.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791757123150151710/cyow1dtszh211.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791757123532881930/shrcxW0n7sjPJ4lTxb9AO12EsL9le6-wbpyL7unweHA.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791757123691872256/a0NNo0G6_700w_0.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791757123884941342/download_1.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791757124152590336/3c0.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791757124493377596/6b57a4d88702aa220831db0b5b62bb5d.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791757124845174854/shantae_by_didi_esmeralda_ddxsbqq-fullview.jpg'];
const discordmods = ['https://tenor.com/view/discord-moderator-kitten-gif-18177005', 'https://tenor.com/view/discord-mods-discord-mods-discord-mods-be-like-gif-18886289', 'https://cdn.discordapp.com/attachments/728388280353292319/780580423805698048/image0.jpg', 'https://cdn.discordapp.com/attachments/728388280353292319/780580572032270336/image0.jpg'];
const ragecomic = ['Sexual assault? You mean trolling', 'Im gonna fill Wal-Mart with cyanide gass', 'I have your liver', 'Come outside and see the sun', 'You will pay for your sins', 'Im gonna take you to the cleaners'];

function emoji(id) {
	return client.emojis.cache.get(id).toString();
}

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
	if(command2 === 'buffwoman') {
		const buffembed = new Discord.MessageEmbed()
			.setColor('#363833')
			.setTitle('A buff woman')
			.setDescription('Woah a buff woman :O')
			.setFooter(`Requested by ${message.author.username}`)
			.setTimestamp()
			.setImage(Buffies [Math.floor(Math.random() * Buffies .length)]);
		message.channel.send(buffembed);
	}
	if(command2 === 'updatelog') {
		const discordmodembed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle('ADDED A NEW COMMAND cmt!rage')
			.setDescription('Check back often to see if any new updates are in!')
			.setFooter(`Requested by ${message.author.username}`)
			.setTimestamp();
		message.channel.send(discordmodembed);
	}
	if(command2 === 'help') {
		const discordmodembed = new Discord.MessageEmbed()
			.setColor('#23a118')
			.setTitle('List of commands')
			.setDescription('Check back often to see if any new updates are in!')
			.setFooter(`Requested by ${message.author.username}`)
			.setTimestamp()
			.addFields(
				{ name: 'cmt!cement', value: 'Drops a random cement meme', inline: false },
			)
			.addFields(
				{ name: 'cmt!ping', value: 'Pong this was a test command will add ms back later', inline: false },
			).addFields(
				{ name: 'cmt!basspro', value: 'Drops a random basspro meme', inline: false },
			).addFields(
				{ name: 'cmt!troll', value: 'Drops a random trollface meme.', inline: false },
			).addFields(
				{ name: 'cmt!femur', value: 'Drops a random femur breaker meme.', inline: false },
			).addFields(
				{ name: 'cmt!discordmods', value: 'Drops a random discordmod meme.', inline: false },
			).addFields(
				{ name: 'cmt!oil', value: 'Cover your enemies in oil', inline: false },
			)
			.addFields(
				{ name: 'cmt!updatelog', value: 'See if any new commands have been added', inline: false },
			)
			.addFields(
				{ name: 'cmt!brazil', value: 'Send a person of your choice to brazil!', inline: false },
			)
			.addFields(
				{ name: 'cmt!russia', value: 'Send a person of your choice to russia!', inline: false },
			)
			.addFields(
				{ name: 'cmt!gay', value: 'A staff exclusive command', inline: false },
			)
			.addFields(
				{ name: 'cmt!retardhalloffame', value: 'A hall of fame to the retards who got banned', inline: false },
			)
			.addFields(
				{ name: 'cmt!ohio', value: 'send a nigga to hell- I mean Ohio.', inline: false },
			)
			.addFields(
				{ name: 'cmt!buffwoman', value: 'Sends a picture of a buff girl.', inline: false },
			)
			.addFields(
				{ name: 'cmt!rage', value: 'ComE oUtsIde anD sEE tHe SUn', inline: false },
			)
			.setTimestamp()
			.setImage('https://cdn.discordapp.com/emojis/742884743565279292.png?v=1');
		message.channel.send(discordmodembed);
	}
	const taggedUser2 = message.mentions.users.first();
	if(command2 === 'brazil') {
		const BrazilEmbed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle('Your going to brazil')
			.setDescription(`${message.author} has just sent ${taggedUser2.username} to brazil!`)
			.setFooter('Enjoy Brazil')
			.setImage('https://cdn.discordapp.com/attachments/409067622689406979/788915989718368286/AABrizilfalg.png')
			.setTimestamp();
		message.channel.send(BrazilEmbed);
	}
	if(command2 === 'russia') {
		const SovietEmbed = new Discord.MessageEmbed()
			.setColor('#FF0000')
			.setTitle('YOUR GOING TO THE MOTHERLAND COMRADE')
			.setDescription(`COMRADE ${message.author} HAS SENT ${taggedUser2.username} TO THE GULAG`)
			.setFooter('Enjoy the MOTHERLAND')
			.setImage('https://cdn.discordapp.com/attachments/602593912984567808/789313920845611018/AABBRUSSIA.png')
			.setTimestamp();
		message.channel.send(SovietEmbed);
	}
	if(command2 === 'retardhalloffame') {
		const retardembed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle('HERE IS ALL THE RETARDS THAT HAVE BEEN BANNED')
			.setDescription(`${message.author} has requested the retard hall of fame`)
			.setFooter('Enjoy!')
			.addFields(
				{ name: 'Eminet', value: 'Retard was mad he couldnt post gore', inline: false },
			)
			.setImage('https://cdn.discordapp.com/attachments/780269405534945281/790386843224637440/AARETARD.jpeg')
			.addFields(
				{ name: 'GRIM', value: 'Retard was banned for wanting only Gore and Nazi memes', inline: false },
			)
			.setTimestamp();
		message.channel.send(retardembed);
	}
	if(command2 === 'ohio') {
		const OhioEmbed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle(`${taggedUser2.username} has just been sent to ohio`)
			.setDescription(`CHAD ${message.author} HAS SENT ${taggedUser2.username} TO THE HELL(OHIO)!`)
			.setFooter(`ENYOY OHIO ${taggedUser2.username}`)
			.setImage('https://cdn.discordapp.com/attachments/409067622689406979/790769809772118027/OHIO.png')
			.setTimestamp();
		message.channel.send(OhioEmbed);


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
	if (command2 === 'rage') {
		message.channel.send(ragecomic [Math.floor(Math.random() * ragecomic .length)]);
		message.channel.send(emoji('742884743565279292'));
	}
	if (command2 === 'gay' && message.member.roles.cache.has('786708264136998933')) {
		const gayembed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle('YOUR A GAY LITTLE NIGGA AARENT YA')
			.setDescription(`CHAD ${message.author} HAS SENT ${taggedUser2.username} TO GAYCAMP`)
			.setFooter('ENJOY BEING GAY!')
			.setImage('https://cdn.discordapp.com/attachments/602593912984567808/789663945404186645/AABBBBTROLL.jpg')
			.setTimestamp();
		message.channel.send(gayembed);
	}
	if (command2 === 'test')
	message.channel.send('poggers');
});