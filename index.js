const aoijs = require("aoi.js")

const bot = new aoijs.AoiClient({
  token: process.env.TOKEN,
  prefix: "!",
  intents: "all"
})

//Events
bot.onMessage()

//Command Example (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})
