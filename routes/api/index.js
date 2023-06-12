const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');


router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

// Inform which route has been hit
router.use((req,res) => {res.json('You have hit the API route!')})

module.exports = router;
