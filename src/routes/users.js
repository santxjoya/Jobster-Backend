const express = require('express');
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    updateOneFieldUser,
    deleteUser
} = require('../controllers/UserController');
const router = express.Router();

router.post('/users', createUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUser);
router.patch('/users/:id', updateOneFieldUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
