const ShortUrlController = require('../controllers/ShortUrlController');
const router = require('express').Router();


router.get('/:id', ShortUrlController.decode);

router.get('/decode/:id', ShortUrlController.decode);

router.post('/encode', ShortUrlController.encode);

module.exports = router;