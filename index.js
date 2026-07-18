const { default: makeWASocket } = require('@whiskeysockets/baileys');
console.log("Bot Starting...");
console.log("Session ID:", process.env.SESSION_ID);
setInterval(() => { console.log("Bot is running..."); }, 30000);
