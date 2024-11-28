const express = require('express')
const router = express.Router();
const QuestionController = require('../controllers/QuestionControllers')

router.post('/add', QuestionController.addQuestion);

router.get('/', QuestionController.getQuestions)

router.get('/random/:count?', QuestionController.getRandomQuestion)

router.get('/test', QuestionController.test);

module.exports = router;