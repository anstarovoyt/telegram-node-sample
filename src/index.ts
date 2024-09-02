import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config';

console.log("Starting the bot ...");

// Replace with your own Telegram Bot API token
const token = process.env.TELEGRAM_BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {
    polling: true
});

// Listener for any kind of message received
bot.on('message', (msg: TelegramBot.Message) => {
    const chatId = msg.chat.id;

    console.log("Received a message");
    void bot.sendMessage(chatId, 'Hello! Welcome to your Telegram bot.');
});

console.log("Started");
