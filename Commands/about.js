module.exports = [{
  name: 'About',
  aliases: ["Cosmos"],
  usage: 'About',
  description: 'About cosmos',
  category: 'Utility',
  example: 'About',
  cooldown: '5s',
  code: `
  $title[1;About Cosmos]
  $color[1;$getVar[Color]]
  $description[1;Cosmos is the next generation of the legend, <@876765897157644359>, Cosmos created by AlarixDev / 404#9059 and with help from my bot master, <@706717165583204474>, Cosmos created with aoi.js and with ❤️]
  $addfield[1;Special Thanks For;$username[706717165583204474], $username[648885368543903754], $username[778115359559385119], $username[608358453580136499], $username[715755977483223081] and other user who helping but their name not displayed;no]
  $footer[1;Cosmos v$getvar[Version]]
  $addButton[1;Invite Me;link;https://discord.com/api/oauth2/authorize?client_id=$clientid&permissions=8&scope=applications.commands%20bot;no;🔗]
  $addButton[1;Support;link;https://discord.gg/mwn6B5Twtk;no;🔨]
  $globalcooldown[$commandinfo[$commandName;cooldown];<a:Timer:910115421854781440> Please wait %time%!]
`
}];
