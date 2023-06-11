const router = require('express').Router();
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);

// Inform which route has been hit
router.use((req,res) => {res.json('You have hit the API route!')})

module.exports = router;
