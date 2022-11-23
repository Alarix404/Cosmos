module.exports = [{
  name: 'Uptime',
  aliases: ["Status"],
  usage: 'Uptime',
  description: 'Show bot uptime',
  category: 'Utility',
  example: 'Uptime',
  cooldown: '5s',
  code: `$title[1;Uptime!]
  $color[1;$getVar[Color]]
  $description[1;<a:Uptime:910434840669736960> Uptime: \`$uptime\`]
  $footer[1;Cosmos v$getvar[Version]]
  $globalcooldown[$commandinfo[$commandName;cooldown];<a:Timer:910115421854781440> Please wait %time%!]`
}];
