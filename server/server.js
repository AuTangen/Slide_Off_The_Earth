const path = require('path')
require('dotenv').config({path: path.join(process.cwd(), './.env')});
const express = require('express');
const session = require('express-session')
const PORT = process.env.PORT || 3001;
const db = require('./config/connection');

const api_routes = require('./routes/api_routes')
const auth_routes = require('./routes/auth_routes')

console.log(process.env.SESSION_SECRET)

const app = express();
app.use(express.json())

app.use(express.static('../client/build'));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {secure: process.env.PORT ? true : false }
  }))

app.use('/api', api_routes)
app.use('/auth', auth_routes)

db.once('open', () => {
app.listen(PORT, () => console.log('server started on port %s', PORT))
});
