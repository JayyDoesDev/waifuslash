const {
  WaifuSlash,
  Command,
  ApplicationCommandOptionType,
  ApplicationCommandType,
} = require("../dist");
const config = require("./config.json");
const waifu = new WaifuSlash({
  botID: config.botID,
  botToken: config.botToken,
});

const blepCommand = new Command()
  .setName("animal")
  .setType(ApplicationCommandOptionType.SUB_COMMAND)
  .setDescription("Send a random adorable animal photo")
  .setOptions([
    {
      name: "animal",
      description: "The type of animal",
      type: ApplicationCommandType.MESSAGE,
      required: true,
      choices: [
        {
          name: "Dog",
          value: "animal_dog",
        },
        {
          name: "Cat",
          value: "animal_cat",
        },
        {
          name: "Penguin",
          value: "animal_penguin",
        },
      ],
    },
  ]);
async function test() {
  await waifu.deleteGuildCommand("845605014663856158", "1142661941777682432");
}

test();
