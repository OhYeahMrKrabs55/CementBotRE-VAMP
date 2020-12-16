module.exports = {
	name: 'args-info',
	description: 'info on the arguments',
	args: true,
	execute(message, args) {
		if(args[0] === 'cement') {
			return	message.channel.send('Oil');
		}

		message.channel.send(`Arguments: ${args} \nArguements Length: ${args.length}`);
	},
};