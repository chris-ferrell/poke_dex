// imports && requires
const express = require('express');
const methodOverride = require('method-override');
const router  = express();
const pokemons = require("../models/testData")
// middleware
router.set('view engine', 'ejs');

router.use(methodOverride('_method'));

router.get('/pokemon', (req, res) => {
    res.render('pokemon_index', { pokemons });
});

// showing the pokemon at index 
router.get('/pokemon/:id', (req, res) => {
    // const index = req.params.id;
    // const pokemon = pokemons.find(pokemon => pokemon.id == req.params.id);
    
  for(let i = 0; i < pokemons.length; i++) {
    if(Number(req.params.id) == Number(pokemons[i].id)){

      res.render(
        '../views/pokemon_views.ejs',
        {
          pokeID:Number(pokemons[i].id),
          pokeOne:pokemons[i]
        })
      
      
    }
  }
  // console.log(Number(pokemons[0].id));


      
    
  });
  
// Route for displaying the form for creating a new pokemon
router.get('/pokemon/new', (req, res) => {
    res.render('pokemon_new');
  });
  
  // Route for displaying the form for editing an existing pokemon
  router.get('/pokemon/:id/edit', (req, res) => {
    const pokemon = pokemons.find(pokemon => pokemon.id == req.params.id);
    res.render('pokemon_edit', { pokemon });
  });
  
  // Route for creating a new pokemon
router.post('/pokemon', (req, res) => {
    const test = pokemons[pokemons.length] + 1
    console.log(pokemons[pokemons.length-1].id+=1)
    const { name, type, level, moves } = req.body;
    const newPokemon = { id: test, name, type, level, moves };
    pokemons.push(newPokemon);
    //                       does not work!!!
    res.redirect(`/pokemon/${newPokemon.id}`);
  });
  
  // Route for updating an existing pokemon
  router.put('/pokemon/:id', (req, res) => {
   
    res.redirect(`/pokemon/${req.params.id}`);
  });
  
  // Route for deleting an existing pokemon
  router.delete('/pokemon/:id', (req, res) => {
    for (let i = 0; i < pokemons.length; i++) {
      if (pokemons[i].id == req.params.id) {
        pokemons.splice(i, 1);
        break;
      }
    }
    res.redirect('/pokemon');
  });
  



module.exports = router