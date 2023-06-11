const router = require('express').Router();
const { 
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../../controllers/userControllers.js');

router.route('/')
    .get(getAllUsers)
    .post(createUser)

router.route('/:id')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;