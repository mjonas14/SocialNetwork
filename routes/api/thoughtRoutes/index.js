const router = require('express').Router();
const { 
    getAllThoughts,
    getOneThought,
 } = require('../../../controllers/thoughtControllers');

router.route('/')
    .get(getAllThoughts);

router.route('/:userId')
    .get(getOneThought);

module.exports = router;