const express = require('express');
const {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    updateOneFieldTask,
    deleteTask
} = require('../controllers/TaskController');
const router = express.Router();

router.post('/tasks', createTask);
router.get('/tasks', getAllTasks);
router.get('/tasks/:id', getTaskById);
router.put('/tasks/:id', updateTask);
router.patch('/tasks/:id', updateOneFieldTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;
