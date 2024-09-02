import TelegramBot from 'node-telegram-bot-api';

// Replace with your own Telegram Bot API token
const token = 'YOUR_TELEGRAM_BOT_TOKEN';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {
    polling: true
});

// Listener for any kind of message received
bot.on('message', (msg: TelegramBot.Message) => {
    const chatId = msg.chat.id;

    // Send a message back
    void bot.sendMessage(chatId, 'Hello! Welcome to your Telegram bot.');
});
