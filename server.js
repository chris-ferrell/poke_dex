const express = require('express');
const app = express();
const PORT = 3000;

//router setup
const router = express.Router();
// importing the poke_router
const poke_router = require('./controller/poke_router');

//middle ware


// Setup routes
app.use('/', pokemonRouter)

app.listen(PORT, () => {
    console.log('listening...')
})