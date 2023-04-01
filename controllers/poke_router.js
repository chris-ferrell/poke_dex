// imports && requires
const express = require('express');
const methodOverride = require('method-override');
const router  = express();

// middleware
router.set('view engine', 'ejs');

router.use(methodOverride('_method'));


module.exports = router