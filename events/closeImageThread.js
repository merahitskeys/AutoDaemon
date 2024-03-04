const { Events } = require('discord.js');
const { RougeBot, imgChannels } = require('../config.json');

module.exports = {
    name: Events.ThreadCreate,
    async execute(event) {
        if (event.ownerId != RougeBot || !(event.parentId in imgChannels)) return; 

        const { client } = event;

        const channel = client.channels.cache.get(event.parentId);
        const thread = channel.threads.cache.find(x => x.id === event.id);
        
        setTimeout(async () => {
            await thread.setArchived(true);
        }, 500);
    }
}