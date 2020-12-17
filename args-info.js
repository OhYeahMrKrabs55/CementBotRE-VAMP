module.exports = {
	name: 'args-info',
	description: 'Info about the arguments',
	execute(message, args) {
		if(!args.length) {
			return message.channel.send(`You have not provided any arguments, ${message.author}`);
		}else if(args[0] === 'cement') {
			return message.channel.send('Oil');
		}

		message.channel.send(`Arguments: ${args} \nArguments Length: ${args.length}`);
	},
};