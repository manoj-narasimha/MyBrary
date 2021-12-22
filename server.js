const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts')
const indexRoute = require('./routes/index')


app.set('view engine', 'ejs')
app.set('views',__dirname + '/views');
app.set('layout','layouts/layout')
app.use(expressLayout)
app.use(express.static('public'))
app.use('/', indexRoute)




app.listen(process.env.PORT || 3000);

