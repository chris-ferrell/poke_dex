const express = require('express');
const app = express();
const PORT = 3000;

//router setup
const router = express.Router();
// importing the poke_router
const poke_router = require('./controllers/poke_router');

//middle ware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(methodOverride("_method"));

// Setup routes
app.use('/', pokemonRouter)

app.listen(PORT, () => {
    console.log('listening...')
})