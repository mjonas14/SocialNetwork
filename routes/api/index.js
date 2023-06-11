const router = require('express').Router();
const userRoutes = require('./userRoutes');

// Inform which route has been hit
router.use((req,res) => {res.json('You have hit the API route!')})

userRoutes.use('/users', userRoutes);

module.exports = router;
