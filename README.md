# waifuslash
 Waifu slash is a discord slash command library made for Discord! :3

# Usage

```js
const { WaifuSlash, Command } = require('waifuslash');
const waifu = new WaifuSlash({
    publicKey: "key",
    botID: "Bot ID",
    botToken: "Bot Token"
});

const pingCommand = new Command()
.setName("ping")
.setDescription("Pong!")
.setOptions([]);

async function main() {
    const pushCommand = await waifu.createGlobalCommand(pingCommand);
}

main();