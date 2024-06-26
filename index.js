const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
  webVersionCache: {
    type: "remote",
    remotePath:
      "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
  },
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.initialize();
// Listening to all incoming messages
client.on('message_create', message => {
	if (message.body === '!ping') {
		// send "pong" directly to the message
		client.sendMessage(message.from, 'pong');
         }

	//اكتب الامر اللي يشغل المنشن المخفي مثلا -- !مخفي او #منشن او او او و	
	else if (msg.body.startsWith('(الامر)' && message.fromMe)) { //hidden mentions with a coustm message

        const chat = await message.getChat();

        let text = message.body.slice(5); // هنا تكتب عدد الحروف الموجوده في الامر مع احتساب المسافة عشان يقص الرساله و يحط عليها منشن مخفي

        let mentions = [];

        let groupid = message.from;



        for (let participant of chat.participants) {

          mentions.push(`${participant.id.user}@c.us`);

        }



        await client.sendMessage(groupid, text, { mentions });

	}
});
