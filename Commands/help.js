module.exports = [{
	name: 'Help',
    aliases: ["Tutorial"],
    usage: 'Help [command]',
    description: 'See my commands list',
    example: 'Help ping',
    cooldown: '5s',
	code: `$globalcooldown[$commandinfo[$commandName;cooldown];<a:Timer:910115421854781440> Please wait %time%!]
	$color[1;$getvar[Color]]
	$title[1;Cosmos Commands List]
	$description[1;**Donate = Slash! We need your help!**
	$customemoji[Lamp;908336280654458900]You can also do \`$getservervar[Prefix]Help [command]\`]
	$addfield[1;Latest Update - 18/11/2021;$customemoji[Orange;908336280654458900] \`Evaluate command created\`
	$customemoji[Orange;908336280654458900] \`ChangeALog command created\`
	$customemoji[Orange;908336280654458900] \`Help command created\`
	$customemoji[Orange;908336280654458900] \`Ping command created\`
	$customemoji[Orange;908336280654458900] \`About command created\`
	$customemoji[Orange;908336280654458900] \`Uptime command created\`
	$customemoji[Orange;908336280654458900] \`Cosmos v$getvar[Version] Released!\`;no]
	$addfield[1;Information;$customemoji[Gear;908336280654458900] **Prefix:** \`$getservervar[Prefix]\`;no]
	$footer[1;Cosmos v$getvar[Version]]
	$thumbnail[1;$userAvatar[$clientID]]
	$addButton[1;Invite Me;link;https://discord.com/api/oauth2/authorize?client_id=957820610745081896&permissions=8&scope=bot%20applications.commands;no;🔗]
	$addButton[1;Support;link;https://discord.gg/jGKf76B3Nq;no;🔨]`
}];
