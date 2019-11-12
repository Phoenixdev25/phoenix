const Discord = require('Discord.js');
const bot = new Discord.Client();

const token = 'NjQzODE1MzUwNDI5MDI0MjY2.Xcq-Ew.CKR0REDJeS1pw4ZQGiPQlVFuZHw';
bot.on('ready',() =>{
    console.log('this bot is online!');
})

bot.on('message', (message) => {
     
    if(message.content == '#pmembers'){
        message.reply('12/13 שוטרים')
       
    }

    if(message.content == '#phelp'){
        message.reply('use [#] prefix')
    }

    if(message.content == '#pcommands'){
        message.reply('commands: #pmembers, #prules, #phelp, #pjoin, #padminpolice,#pacademy,#pserverip')
    }

    if(message.content == '#prules'){
        message.reply('https://docs.google.com/document/d/1hAQL5kZg-eri8gVPEsZCSwN5olwaSthQY2AK7N5afT8/edit?usp=sharing')
    }

    if(message.content == '#pjoin'){
        message.reply('https://docs.google.com/forms/d/e/1FAIpQLSep0rvrBW4mhnexLuZaUxrlaZ8nKX-cUUWiZ_qAfkCBCu-3QA/viewform?usp=sf_link')
    }

    if(message.content == '#pwarnings'){
        message.reply('אזהרות: (כאן אציין א ת כל מי שקיבל אזהרה)');
    }

    if(message.content == '#padmincommands'){
        message.reply('commands: #pwarnings');
    }

    if(message.content == '#padminpolice'){
        message.reply('מפכ"ל המשטרה - עינם, סמפכ"ל המשטרה - סימון');
    }

    if(message.content == '#pacademy'){
        message.reply('השעה והתאריך יעודכנו בעת פתיחת השרת');
    }

    if(message.content == '#pserverip'){
        message.reply('יעודכן בעת פתיחת השרת')
    }

})

bot.login(token);
