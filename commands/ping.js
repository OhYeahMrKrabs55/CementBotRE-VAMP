module.exports = {
	name: 'ping',
	description: 'Ping command',
	execute(message, args) {
		message.channel.send('NEW PONG');
	},
};