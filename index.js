// Print version of nodejs
//#F85404 -> Bot Main Color
console.log('node.js version - '+ process.version);

const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
token: "OTA3OTkzMzkyMzUxNDIwNDM2.GOYfog.dX6o2R_BD7th08QYvnRqkssQjoE5iInrvz_P1E",
prefix: ['$getservervar[Prefix]','<@$clientID>'],
intents: "all"
})

//Bot status
//idk it not working

//Events
bot.onMessage()

//Load commands in commands folder
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

bot.readyCommand({ //Event Command
    channel: "910453172311568394", //The channel where the Client will log. (optional)
    code: `
    $title[1;Bot Ready!]
    $description[1;Ping: $pingms]
    $color[#FF5404]
    $image[1;https://media.discordapp.net/attachments/908535814298935326/1043771288914772008/Cosmos.png]
    ` //This can be a message or code to execute.
})


//Command Example (ping)
bot.command({
name: "hello",
code:
    `
	$title[1;Bot Ready!]
    $description[1;Ping: $pingms]
    $color[#FF5404]
    $image[1;https://media.discordapp.net/attachments/908535814298935326/1043771288914772008/Cosmos.png]
    $onlyForIDs[828434675378159647;haha l bozo]
    `
})

//Slash Interaction Command Example (ping)
/*MUST EXECUTE FUNCTION FOR IT TO WORK
$createApplicationCommand[$guildID;ping;Pong!;true;slash]
*/
bot.interactionCommand({
  name: "ping",
  prototype: 'slash',
  code: `$interactionReply[Pong! $pingms]`
})

const Variables = require("./Variables.js")

bot.variables(Variables)
bot.onInteractionCreate()
