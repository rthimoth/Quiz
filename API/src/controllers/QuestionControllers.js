const Question = require('../models/QuestionModels')

const QuestionController = {
    addQuestion: async (req, res) => {
        try {
            const NewQuestion = new Question({
                type: req.body.type,
                theme: req.body.theme,
                question: req.body.question,
                choices: req.body.choices,
                answer: req.body.answer
            });
            const savedQuestion = await NewQuestion.save();
            res.status(200).send({
                status: 'success',
                message: "Question a bien ete cree",
                ByteLengthQueuingStrategyuestion: savedQuestion
            });
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).send({
                status: 'error',
                message: "Erreur lors de la creation de la question",
                error: error.message,
            });
        }
    },
    getQuestions: async(req, res) => {
        try {
            const quest = await Question.find();
            res.status(200).json({ status: 'success', data: quest });
        } catch (err) {
            console.error(err);
            res.status(500).json({ status: 'error', message: 'Error fetching Questions' });
        }
    },
    getRandomQuestion: async(req, res) => {
        try {
            const count = parseInt(req.params.count) || 1;
            const totalQuestions = await Question.countDocuments();
            if (count > totalQuestions) {
                return res.status(400).json({
                    status: 'error',
                    message: `Error fetching Questions.`,
                });
            }
            const randomQuestions = await Question.aggregate([
                { $sample : {size : count} }
            ]);
            res.status(200).json({status : 'success', data: randomQuestions})
        } catch (err) {
            console.error(err);
            res.status(500).json({ status: 'error', message: 'Error fetching Questions' });
        }
    },
    test: async(req, res) => {
        res.status(200).send("Test OK");
    },
};

module.exports = QuestionController