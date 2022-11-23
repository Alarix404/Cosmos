module.exports = [{
  name: 'Evaluate',
  aliases: ["Eval"],
  usage: 'Evaluate [code]',
  description: 'Evaluate a code',
  category: 'Developer',
  example: 'Evaluate $uptime',
  cooldown: '0s',
  code: `$eval[$message]
  $onlyForIDs[$botownerid;648885368543903754;778115359559385119;706717165583204474;608358453580136499;]`
}];
