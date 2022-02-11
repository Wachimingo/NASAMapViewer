const express = require('express');
const nasa = require('../controllers/nasaController');

const router = express.Router();

router
    .route('/')
    .post(nasa.locationConverter);

module.exports = router;