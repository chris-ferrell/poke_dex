const express = require('express');
const methodOverride = require('method-override')
const app = express();
const PORT = 3000;

//router setup
const router = express.Router();
// importing the poke_router
const poke_router = require('./controllers/poke_router');

//middle ware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride("_method"));

// Setup routes
app.use('/', poke_router);

app.listen(PORT, () => {
    console.log('listening...')
})