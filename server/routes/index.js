const express = require('express');
const router = express.Router();
const pantry = require('./pantry');
const ingredients = require('./ingredients');

router.use('/pantry', pantry);
router.use('/ingredients', ingredients);

module.exports = router;
