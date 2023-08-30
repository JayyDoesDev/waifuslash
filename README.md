<p align="center">
   <img src="https://raw.githubusercontent.com/JayyDoesDev/waifuslash/main/.github/assets/power.jpg" alt="power" width="300" height="300">
</p>

# waifuslash
 Waifu slash is a discord slash command library made for Discord! :3

 `npm i waifuslash`
 
 `yarn add waifuslash`

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
```
All rights reserved to the owners for the "Power" character
