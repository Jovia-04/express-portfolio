var express = require('express');
var app = express()

app.set('view engine','ejs')
app.set('views', 'Personal Portfolio')

app.use(express.static('Personal Portfolio'))

app.get('/home', function(req, res){
    res.render('portfolio')
});

app.get('/about', function(req, res){
    res.render('about')
});

app.get('/contact', function(req, res){
    res.render('contact')
});

app.listen(3000)