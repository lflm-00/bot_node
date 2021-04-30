const { Telegraf } = require('telegraf')


const bot = new Telegraf('1652770005:AAHclqmQWm5wqHVw5yo0cqG24jXeEYMnrmQ')
bot.start((ctx) =>{
    console.log(ctx.from.chat_id);
    ctx.reply('prueba 2 ' + ctx.from.first_name + ' ' + ctx.from.last_name) // Listen Commands
})



// Messages 

const msgArray = ['amorshito' , 'amor' ,'español','Hola' , 'que'];
const nombre = ['Laura' , 'lala','laura'];
const chat3 = ['good' , 'Good','Excelent'];

bot.hears('Hello' , (ctx) => {
    ctx.reply('Hello good day , what is your name ? ') // Listen the messages
})


//


bot.hears('text' , (ctx) => {
    msg = ctx.message.text
    msgArray3 = msg.split(' ')
    for (let i = 0; i < msgArray3.length; i++) {
        
        for (let x = 0; x < chat3.length; x++) {
            if (msgArray3[i] == chat3[x]) {
                
                ctx.reply('tell me what you did today ? and dont use a translator')
            }
        }
    }
})

bot.on('text' , (ctx) => {
    msg = ctx.message.text
    msgArray2 = msg.split(' ')
    for (let i = 0; i < msgArray2.length; i++) {
        
        for (let x = 0; x < msgArray.length; x++) {
            if (msgArray2[i] == msgArray[x]) {
                
                ctx.reply('Hey bitch '+ ctx.from.first_name + ' ' + 'Not speak in spanish ')
            }
        }
    }
})

// COMMANDS 
bot.command('quit', (ctx) => {
    // Explicit usage
    ctx.telegraf.leaveChat(ctx.message.chat.id)
  
    // Using context shortcut
    ctx.leaveChat()
  })

bot.command('Laura' ,(ctx) =>{
    ctx.reply('Bots para chatear amorshitow ajajajja ')
})

bot.launch() // Started bot 

bot.mention( 'Luis',(ctx) => ctx.reply('Hola'))
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))