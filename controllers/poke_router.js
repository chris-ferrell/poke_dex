// imports && requires
const express = require('express');
const router  = express();

// middleware
router.set('view engine', 'ejs');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(methodOverride('_method'));


module.exports = router