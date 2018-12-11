const express = require('express');
const router  = express.Router();

router.use('/api/auth', require('./auth'));

router.use('/api/edamam', require('./edamam'));

module.exports = router;
