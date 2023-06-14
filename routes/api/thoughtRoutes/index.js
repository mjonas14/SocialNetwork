const router = require('express').Router();
const { 
    getAllThoughts,
    getOneThought,
    createReaction,
    createThought
 } = require('../../../controllers/thoughtControllers');

router.route('/')
    .get(getAllThoughts)
    .post(createThought);

router.route('/:thoughtId')
    .get(getOneThought)
    .put(createReaction);

module.exports = router;