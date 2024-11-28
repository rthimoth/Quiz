const express = require('express');
const router = express.Router();

const QuestionRouter = require('./QuestionRoutes')

router.use('/question', QuestionRouter);

router.get('/', (req, res) => {
    res.send('API is running.');
});

module.exports = router