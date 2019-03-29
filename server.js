const express = require('express');
var hbs = require('hbs');

var app = express();

app.use((req, res, next)=>{
    res.render('maintenance.hbs');
})

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));

app.use((req, res, next)=>{
    var now = new Date().toString(); 

    console.log(`${now}`);
    next();
});

hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
})

hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
})

app.get('/',(req, res)=>{
    res.render('home.hbs',{
        pageTitle: 'Home Page',
        welcomeMessage: 'Hello there'
    })
});

app.get('/about',(req, res)=>{
    res.render('about.hbs', {
        pageTitle: 'About Page',  
    });
})

app.listen('8000',()=>{
    console.log("Server Started")
});