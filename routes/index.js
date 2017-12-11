const express = require('express');

const router = express.Router();
const darkskyController = require('../controllers/darkskyController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', catchErrors(darkskyController.homePage));
// router.get('/api', catchErrors(darkskyController.api));

router.post('/:lat/:long', catchErrors(darkskyController.api));

module.exports = router;
