const { Events } = require('discord.js');
const { rougebotId, imgChannels } = require('../config.json');

module.exports = {
    name: Events.ThreadCreate,
    async execute(event) {
        if (event.ownerId != rougebotId || !imgChannels.includes(event.parentId)) {
            console.log("condition check failed");
            return;
        }

        const { client } = event;

        const channel = client.channels.cache.get(event.parentId);
        const thread = channel.threads.cache.find(x => x.id === event.id);
        
        setTimeout(async () => {
            await thread.setArchived(true);
            console.log("Thread closed");
        }, 500);
    }
}