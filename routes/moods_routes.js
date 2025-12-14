const express = require('express');
const router = express.Router();


const controller = require('../controllers/moods_controller');


router.get('/', controller.getAllMoods); // GET + query
router.get('/:id', controller.getMoodById); // GET + params
router.post('/', controller.createMood); // POST + body
router.delete('/:id', controller.deleteMood); // DELETE


module.exports = router;