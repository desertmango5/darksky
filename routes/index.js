const express = require('express');

const router = express.Router();
const darkskyController = require('../controllers/darkskyController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(darkskyController.homePage));


module.exports = router;
