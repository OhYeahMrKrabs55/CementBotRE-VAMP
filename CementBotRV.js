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
	client.user.setActivity('Eating your cement cmt!help');
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
	try {
		command.execute(message, args);
	}catch(error) {
		console.error(error);
		message.reply('there was an error executing this cmd');
	}
});
client.login(process.env.BOT_TOKEN);
const cement = ['https://cdn.discordapp.com/attachments/505861794066202644/780253680607035392/image0.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780253681063952404/image1.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780253681278779412/image2.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780253681479581746/image3.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780253681751687198/image4.jpg', 'https://cdn.discordapp.com/attachments/778730061129842708/780249212431761408/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780249269667627058/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780249349062000690/image0.gif', 'https://cdn.discordapp.com/attachments/778730061129842708/780249369202130995/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780249410201452544/image0.png', 'https://media.discordapp.net/attachments/778730061129842708/780249483182473226/video0', 'https://cdn.discordapp.com/attachments/590396924532883456/780273525239054356/meme.png', 'https://cdn.discordapp.com/attachments/675162643895681073/780540682652745748/4nkv7i.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780448056063164426/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780541443034185758/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780541443420586025/image1.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780541648597549116/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780541800271446066/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780542068040663050/image0.png'];
const basspro = ['https://cdn.discordapp.com/attachments/778730061129842708/780273860846682112/image0.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780273861135433728/image1.png', 'https://cdn.discordapp.com/attachments/778730061129842708/780273861378965514/image2.jpg', 'https://cdn.discordapp.com/attachments/778730061129842708/780273861639667712/image3.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780274366146412615/image1.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780274366436081684/image2.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780274367056576542/image4.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780274367304957972/image5.png', 'https://cdn.discordapp.com/attachments/505861794066202644/780276571978072074/image0.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276572656762900/image1.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276572862152704/image2.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276573101883412/image3.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276573345021972/image4.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276573696950302/image5.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276573983080458/image6.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276574405525514/image7.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276574728749086/image8.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780276574988664862/image9.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277369533497344/image0.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277369747275776/image1.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277369931431947/image2.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277370145079326/image3.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277370413121586/image4.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277370657308672/image5.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277370879344670/image6.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277371335868416/image8.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780277371517403156/image9.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780278010880065536/image0.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780278011089387540/image1.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780278011273543690/image2.jpg', 'https://cdn.discordapp.com/attachments/505861794066202644/780278011425587230/image3.jpg'];
const troll = [''];
const memes = ['https://cdn.discordapp.com/attachments/1020762520362946660/1020777659510308894/IMG_5371.jpg', 'https://cdn.discordapp.com/attachments/1020762520362946660/1020772413144825877/98454d5e719311e4312929597eb4e0f5.jpg', 'https://cdn.discordapp.com/attachments/1020762520362946660/1020763100070289629/B028403F-3943-4495-A3F9-AE85581F7377.png', 'https://cdn.discordapp.com/attachments/1020762520362946660/1020850979995922574/0CBE4387-B806-4D62-86A3-9A54D8CF5435.jpg', 'https://cdn.discordapp.com/attachments/1020762520362946660/1020850929865601125/8F3ACD12-0947-4211-BF1D-F27749E62571.jpg', 'https://cdn.discordapp.com/attachments/1020762520362946660/1021112667148144680/unknown-380.png', 'https://cdn.discordapp.com/attachments/1020762520362946660/1020856275992584282/IMG_0351.png', 'https://cdn.discordapp.com/attachments/1020762520362946660/1021112782902534224/274787123_920506508660760_4230523440274567594_n.jpg', 'https://cdn.discordapp.com/attachments/1020762520362946660/1021112748748324885/Bowl.jpg', 'https://cdn.discordapp.com/attachments/1020762520362946660/1021112721548259459/4026a178d72e47a59455adc6fea26ea0_306704767_422658063273902_6401449851791699244_n.jpg', 'https://cdn.discordapp.com/attachments/1020762520362946660/1021112816561832077/226554067_419942712627523_3952562782728765820.jpg'];
const femur = ['Currently work in progress'];
const discordmods = ['https://tenor.com/view/discord-moderator-kitten-gif-18177005', 'https://tenor.com/view/discord-mods-discord-mods-discord-mods-be-like-gif-18886289', 'https://cdn.discordapp.com/attachments/728388280353292319/780580423805698048/image0.jpg', 'https://cdn.discordapp.com/attachments/728388280353292319/780580572032270336/image0.jpg'];
const Buffies = ['https://cdn.discordapp.com/attachments/690732168493662250/791774336930283560/53a78ab9d2243d36539319555be642e0.jpg','https://cdn.discordapp.com/attachments/690732168493662250/791774336696451162/maki_oze___fire_force_co__8___bikini_by_adsouto_de3sxck-350t.jpg','https://cdn.discordapp.com/attachments/690732168493662250/791774336461045781/C35kOX1hysRk7A1UxYiEj3byi5e0Pq4YD3c3u_2FZwY.jpg','https://cdn.discordapp.com/attachments/690732168493662250/791774336176226354/iqb8d1f0yaj51.jpg','https://cdn.discordapp.com/attachments/808081948685107291/808083639338270780/image0.jpg','https://cdn.discordapp.com/attachments/728388280353292319/791455299525410826/1601041537710.gif', 'https://cdn.discordapp.com/attachments/728388280353292319/791454922596024330/f02d8797d11905d436b399a0ff72baaf.jpg', 'https://cdn.discordapp.com/attachments/728388280353292319/791456652704350218/IMG_20201020_093339_476.jpg', 'https://cdn.discordapp.com/attachments/728388280353292319/791456788544225290/image0.png', 'https://cdn.discordapp.com/attachments/690732168493662250/791460633664684032/jn9srph28p661-1-1.png', 'https://cdn.discordapp.com/attachments/690732168493662250/791460635442675712/8i194urorsz51.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460635762229298/ddb7al3-2a4101fd-bbfe-4f29-b235-33eb672d9f12.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460636042330153/38a.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460636403433492/770.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460636818538506/089.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460637246881842/957196_zakusiii_bea.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460637531308053/bea_by_neoartcore_ddb9g5a-pre.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460637934223420/7d2664fd7d37a54e3c82f099275d384e.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460638358372382/1008607_mootium_bea-pokemon.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460709477122078/a4b.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460709807423488/5oe8cchkt0q31.png', 'https://cdn.discordapp.com/attachments/690732168493662250/791460710147948554/Vo1p6A3.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460710491488276/Mirukohttpthegreatpeanuttumblrcompost176180244754mirukosavedmylife_0147c4_6733534.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460710831357962/012889e2c40d83ba34aa5bfe464e0048.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460711057326110/van-lawrence-ching-vanlawrenceching-fanart-pokemon-bea-001-sat.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460711653179462/cd6e416a156bb527a66ed7ccc9327ceb.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791460711914012713/0ed83d88d7773de2f4a15ee9a8681604.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791748341474000896/qlFr9vO.png', 'https://cdn.discordapp.com/attachments/690732168493662250/791754258667405342/7dNXDmD.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754259170852914/images_7.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754259406127123/tumblr_pu34xgpEhk1rvmq7jo1_1280.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754259967246397/images_6.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754260315897876/unnamed.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754260726546452/download.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754261067071498/sample-fac8b4d11d03c13dea401968ab7db9de.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754261544304651/EV0BA5xVAAAXbMy.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754262408462376/50e7cb38a008dbc8243eb2d677b1cd45.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754309145722940/kba7y02fcly41.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754309632131082/d1df79fb747852b0a9f414386edd5578.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754310173065246/images_4.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754310438354944/04e.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754310706659338/c7a4eacff02428f9b143aa3c942a42f8.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754310971162684/80f3ae039e467dff54849b3ccd246478.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754311243661322/1adc7e222735fe1d0030e26504bad459.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754311536476201/EMBGS6wWwAANCp2.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754311881064468/0fc81870fe31f7c5dd95347d161659d8.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754312224079902/images_3.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754381644660766/sample-ab216afc428b70733719f301c296482a.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754382076805140/vkP8jk5.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754382428733450/84KN9ZfLwSMVEmdL9B5otTxFSurIEB0Pzw1WCOGEfNo.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754382664138772/fcb.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754382860615710/bd0149d96e2b2a235314122c2a2bc25a.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754383318319124/97a5e4de7ba73f66dabe4ff37d5e6ab4.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754383606939678/Coj4qIFXEAA9esU.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754383850733568/a16b703b7748b2f00ed7017c9b8f96ab.png', 'https://cdn.discordapp.com/attachments/690732168493662250/791754384160849930/9b425451dc5eb21f9560b33323bbce54.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754384702046238/images_2.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754460203974756/120fe64abbe4ff24ce3d9062534e8308.png', 'https://cdn.discordapp.com/attachments/690732168493662250/791754460580937758/Daidoujisenrankagura_1ca9922cc5087cd8e108ba6bf5144134.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754460917137418/anime_muscle_girl_2_by_vajter_dcw38ea-350t.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754461138649128/images_1.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754461332242482/Dk7wzQuVsAAkCT9.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754461600940053/DljhDY2U4AAuQo4.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754461810917416/Du2xyCtU0AA9_n_.jpg_large.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754462510841923/dda2xum-9042a524-bf07-4314-86f7-400eb7023761.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754462829084742/l5kvAqRXrNZq6hc-AvqaFdnHa0hqInLUHww0vVwwTWs.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754463035654184/tumblr_p86ux0bvFJ1s8esvho1_1280.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754500440064040/a3b4160a26aa58255c41d22b16882f4e.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791754500682547200/817.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791757122102755398/7c2b55b24d1212f9cbac181413e95b4b.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791757122639233024/ihx3_6K6-UYV8AMmS_VgrZp8YZs-1FQSUMSLsBRKMf0.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791757123150151710/cyow1dtszh211.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791757123532881930/shrcxW0n7sjPJ4lTxb9AO12EsL9le6-wbpyL7unweHA.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791757123691872256/a0NNo0G6_700w_0.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791757123884941342/download_1.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791757124152590336/3c0.jpeg', 'https://cdn.discordapp.com/attachments/690732168493662250/791757124493377596/6b57a4d88702aa220831db0b5b62bb5d.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791757124845174854/shantae_by_didi_esmeralda_ddxsbqq-fullview.jpg','https://cdn.discordapp.com/attachments/690732168493662250/791774337254162452/d3ahm9y-26a361d4-890b-468c-b679-bf441c755fb6.jpg','https://cdn.discordapp.com/attachments/690732168493662250/791774337790509126/rob-porter-chun-li-exclusive.jpg','https://cdn.discordapp.com/attachments/690732168493662250/791774338185560064/Ct3gMw3WAAE5AzF.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791774338432499772/images_6.jpeg','https://cdn.discordapp.com/attachments/690732168493662250/791774338591359016/dfbb6f4e86c9efba0c7799390c41c9d5.jpg','https://cdn.discordapp.com/attachments/690732168493662250/791774338827026472/download.jpeg','https://cdn.discordapp.com/attachments/690732168493662250/791774398390075394/5nigycn4pbc31.jpg','https://cdn.discordapp.com/attachments/690732168493662250/791774398688395284/DF7AQ5qVYAARL5y.jpg', 'https://cdn.discordapp.com/attachments/690732168493662250/791774399165759528/ddd56un-b166cdca-cc81-4aac-8ad7-c8c4eb036a01.png', 'https://cdn.discordapp.com/attachments/690732168493662250/791774399464079360/c63oolxtn3c31.jpg','https://cdn.discordapp.com/attachments/690732168493662250/791774399690309642/dd1dk28-c716a323-914d-4d6c-9d51-e50f13e85dfe.png'];
const ragecomic = ['Sexual assault? You mean trolling', 'Im gonna fill Wal-Mart with cyanide gass', 'I have your liver', 'Come outside and see the sun', 'You will pay for your sins', 'Im gonna take you to the cleaners'];
const beckers = ['https://cdn.discordapp.com/attachments/842784363862163506/861724324871405578/image0.gif','https://cdn.discordapp.com/attachments/842784363862163506/861724363513921606/image0.jpg','https://cdn.discordapp.com/attachments/842784363862163506/861724392543092736/image0.jpg','https://media.discordapp.net/attachments/658700231944175639/860921231224995871/hHVoQxSv.gif','https://media.discordapp.net/attachments/658700231944175639/861292026104512522/IdTcGlFN.gif','https://tenor.com/view/beckers-bussin-food-black-dude-gif-21339583','https://tenor.com/view/meme-asylum-gif-22109037','https://cdn.discordapp.com/attachments/842784363862163506/861724514197962752/InShot_20210703_233444028.jpg','https://cdn.discordapp.com/attachments/842784363862163506/861724581554028554/image0.gif','https://cdn.discordapp.com/attachments/842784363862163506/861724622147682314/image0-3.gif','https://cdn.discordapp.com/attachments/842784363862163506/861724741316116490/InShot_20210703_144206581.jpg','https://cdn.discordapp.com/attachments/842784363862163506/861724784604610590/video0.mp4','https://cdn.discordapp.com/attachments/842784363862163506/861724841718317056/InShot_20210617_185347601.jpg','https://cdn.discordapp.com/attachments/842784363862163506/861724880822861874/image0.gif','https://media.discordapp.net/attachments/803669036508381234/859161202160173096/oFDsrBOM.gif','https://media.discordapp.net/attachments/803669036508381234/857671727501148200/ZYCnKuHZ.gif','https://media.discordapp.net/attachments/803669036508381234/857664615659601950/JSXDBOMS.gif','https://cdn.discordapp.com/attachments/826057644535578624/856347017005236254/JnhtACOr.gif','https://cdn.discordapp.com/attachments/803669036508381234/857661970512740412/DaBAgRUg.gif','https://cdn.discordapp.com/attachments/803669036508381234/856965356648267796/dxGMsKQr.gif','https://media.discordapp.net/attachments/803669036508381234/856965819707555880/xFNcNaTm.gif','https://media.discordapp.net/attachments/529042755029041162/853409419508973628/aQmijhVU.gif','https://media.discordapp.net/attachments/803669036508381234/855212830012997632/aOMnuWpt.gif','https://media.discordapp.net/attachments/658700231944175639/861294604930252820/qyvFwpWo.gif','https://media.discordapp.net/attachments/803669036508381234/855097568685195264/rnRHRdpb.gif','https://media.discordapp.net/attachments/658700231944175639/860935846508625950/TUXPmFVX.gif','https://tenor.com/view/bussin-beckers-meme-asylum-gif-22004051','https://media.discordapp.net/attachments/658700231944175639/858805798661390346/VmWOcFFK.gif','https://tenor.com/view/meme-asylum-omni-man-invincible-beckers-3am-gif-22078235','https://tenor.com/view/meme-asylum-walls-weed-powers-living-gif-21904748','https://tenor.com/view/meme-asylum-420-69-powers-deez-nuts-gif-21861185','https://cdn.discordapp.com/attachments/842784363862163506/861726132697301042/MaKnaxed.mp4','https://tenor.com/view/beckers-bussin-food-black-dude-gif-21339583','https://media.discordapp.net/attachments/803669036508381234/852270621479403590/FdcyDhvF.gif','https://media.discordapp.net/attachments/803669036508381234/850598473442131969/caption.gif','https://media.discordapp.net/attachments/803669036508381234/852199945435742259/BmtPoCxt.gif','https://media.discordapp.net/attachments/658700231944175639/856884887780851733/LArBiinV.gif','https://media.discordapp.net/attachments/658700231944175639/856662837253767178/pEnxbKrU.gif']
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
		if(message.content === 'booba') {
		message.reply('You studying for this and that, why dont you study deez nuts instead ')
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
	const responses2 = [':o a buffwoman', 'WOAH', 'This is amazing'];
	if(command2 === 'buffwoman') {
		const BuffEmbed = new Discord.MessageEmbed()
			.setColor('#363833')
			.setTitle(responses2 [Math.floor(Math.random() * responses2 .length)])
			.setDescription('A buff woman for you')
			.setFooter(`Requested by ${message.author.username}`)
			.setTimestamp()
			.setImage(Buffies [Math.floor(Math.random() * Buffies .length) -1]);
		if (message.channel.nsfw) {
			message.channel.send(BuffEmbed);
		} else {
			message.channel.send('Try this in an NSFW channel!');
		}
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
	if(command2 === 'meme') {
		const memesembed = new Discord.MessageEmbed()
			.setColor('#363833')
			.setTitle('Just a random server meme')
			.setDescription('KILL THEM ALL')
			.setFooter(`Requested by ${message.author.username}`)
			.setTimestamp()
			.setImage(memes [Math.floor(Math.random() * memes .length)]);
		message.channel.send(memesembed);
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
			.setTitle('ADDED A NEW COMMAND cmt!meme')
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
				{ name: 'cmt!rage', value: 'Come out and see the sun', inline: false },
			)
			.addFields(
				{ name: 'cmt!ma', value: 'Posts a meme from the Meme Asylum reddit', inline: false },
			)
			.addFields(
				{ name: 'cmt!buffwoman', value: 'Posts a very buff woman', inline: false },
			).addFields(
				{ name: 'cmt!beckers', value: 'Posts a beckers meme (best memes)', inline: false },
			)
			.addFields(
				{ name: 'cmt!California', value: 'Sends someone to Cali', inline: false },
			)
			.addFields(
				{ name: 'cmt!Florida', value: 'Sends someone to Florida', inline: false },
			)
			.addFields(
				{ name: 'cmt!North Dakota', value: 'Sends someone to North Dakota', inline: false },
			)
			.addFields(
				{ name: 'cmt!Kentucky', value: 'Sends someone to Kentucky', inline: false },
			)
			.addFields(
				{ name: 'cmt!Georgia', value: 'Sends someone to Georgia', inline: false },
			)
			.addFields(
				{ name: 'cmt!Idaho', value: 'Sends someone to Idaho', inline: false },
			)
			.addFields(
				{ name: 'cmt!West Virginia', value: 'Sends someone to West Virginia', inline: false },
			)
		        .addFields(
				{ name: 'cmt!meme', value: 'touch grass', inline: false },
			)
			.setTimestamp()
			.setImage('https://cdn.discordapp.com/emojis/795399335801782302.png?v=1');
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

		return;
	}
	if(command2 === 'retardhalloffame2') {
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
			.setFooter('Enjoy the MOTHERLAND')
			.setImage('https://cdn.discordapp.com/attachments/409067622689406979/790769809772118027/OHIO.png')
			.setTimestamp();
		message.channel.send(OhioEmbed);

		return;
	}
	if (command2 === 'rage') {
		message.channel.send(ragecomic [Math.floor(Math.random() * ragecomic .length)]);
		message.channel.send(emoji('742884743565279292'));
	}
	if (command2 === 'beckers') {
		message.channel.send(beckers [Math.floor(Math.random() * beckers .length)]);
	}
	if (command2 === 'test') {
		message.channel.send('this is workin');
	}
	if(command2 === 'california') {
		const CaliEmbed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle(`${taggedUser2.username} has just been sent to California`)
			.setDescription(`CHAD ${message.author} HAS SENT ${taggedUser2.username} TO THE HELL(California)!`)
			.setFooter('Enjoy the Burning')
			.setImage('https://cdn.discordapp.com/attachments/849674695309656074/878826626450874458/716WjLoehML._AC_SL1500_.jpg')
			.setTimestamp();
		message.channel.send(CaliEmbed);

	}
	if(command2 === 'florida') {
		const FloridaEmbed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle(`${taggedUser2.username} has just been sent to Florida`)
			.setDescription(`CHAD ${message.author} HAS SENT ${taggedUser2.username} TO THE Huricane(Florida)!`)
			.setFooter('Enjoy the Rain and Gators')
			.setImage('https://cdn.discordapp.com/attachments/849674695309656074/878827168086491146/71mL1wdmA6L._AC_SL1500_.jpg')
			.setTimestamp();
		message.channel.send(FloridaEmbed);

	}
	if(command2 === 'northdakota') {
		const NorthDEmbed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle(`${taggedUser2.username} has just been sent to North Dakota`)
			.setDescription(`CHAD ${message.author} HAS SENT ${taggedUser2.username} TO THE Void(North Dakota)!`)
			.setFooter('Enjoy the Nothingness')
			.setImage('https://cdn.discordapp.com/attachments/849674695309656074/878827719390036058/flag-North-Dakota-National-Guard-change-state-1911.jpg')
			.setTimestamp();
		message.channel.send(NorthDEmbed);

		return;
	}
	if(command2 === 'kentucky') {
		const KentuckyEmbed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle(`${taggedUser2.username} has just been sent to Kentucky`)
			.setDescription(` ${message.author} HAS SENT ${taggedUser2.username} TO THE WONDERFUL STATE OF KENTUCKY!`)
			.setFooter('Enjoy the Fried Chicken')
			.setImage('https://cdn.discordapp.com/attachments/849674695309656074/878828332693749760/71L9BnOj9wL._AC_SL1500_.jpg')
			.setTimestamp();
		message.channel.send(KentuckyEmbed);

		return;
	}
	if(command2 === 'georgia') {
		const GeorgiaEmbed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle(`${taggedUser2.username} has just been sent to Georgia`)
			.setDescription(` ${message.author} HAS SENT ${taggedUser2.username} TO THE WONDERFUL STATE OF GEROGIA!`)
			.setFooter('Enjoy the Peaches')
			.setImage('https://cdn.discordapp.com/attachments/849674695309656074/878828793249275964/flag-state-battle-Georgia-field-Georgias-History-2003.jpg')
			.setTimestamp();
		message.channel.send(GeorgiaEmbed);

		return;
	}
	if(command2 === 'idaho') {
		const IdahoEmbed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle(`${taggedUser2.username} has just been sent to Idaho`)
			.setDescription(` ${message.author} HAS SENT ${taggedUser2.username} TO THE WONDERFUL STATE OF IDAHO!`)
			.setFooter('Enjoy the Potatoes')
			.setImage('https://cdn.discordapp.com/attachments/849674695309656074/878829169214107679/state-flag-Idaho-military-officer-description-fact-1957.jpg')
			.setTimestamp();
		message.channel.send(IdahoEmbed);

		return;
	}
	if(command2 === 'westvirginia') {
		const WVEmbed = new Discord.MessageEmbed()
			.setColor('RANDOM')
			.setTitle(`${taggedUser2.username} has just been sent to West Virginia`)
			.setDescription(` ${message.author} HAS SENT ${taggedUser2.username} TO THE WONDERFUL STATE OF WEST VIRGINIA!`)
			.setFooter('Enjoy the Pepperoni Rolls')
			.setImage('https://cdn.discordapp.com/attachments/849674695309656074/878829393391280178/west-virginia-flag.jpg')
			.setTimestamp();
		message.channel.send(WVEmbed);

		return;
	}
});
