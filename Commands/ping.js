module.exports = [{
  name: 'Ping',
  aliases: ["Latelancy"],
  usage: 'Ping',
  description: 'Show bot ping/latelancy',
  category: 'Utility',
  example: 'Ping',
  cooldown: '5s',
  code: `$title[1;Pong!]
  $color[1;$getVar[Color]]
  $description[1;<a:PingPong:910095956580646922> Pong! \`$ping\`ms]
  $footer[1;Cosmos v$getvar[Version]]
  $globalcooldown[$commandinfo[$commandName;cooldown];<a:Timer:910115421854781440> Please wait %time%!]`
}];
