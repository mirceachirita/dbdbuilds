const express = require('express');
const router = express.Router();
const PerkTestModel = require('../models/perkTest');

// // Get specific quiz
// router.get('/:id', async (req, res) => {
//     try {
//         const quiz = await EvaluationServices.findQuizById(req.params.id);
//         return res.status(200).json(quiz);
//     } catch (error) {
//         return res.status(500).json({ 'error': `There was an error while fetching the evaluation: ${error}` })
//     }
// });

// // Add questions to quiz
// router.put('/:id/question/:questionId', async (req, res) => {
//     try {
//         const questionAdded = await QuizModel.updateOne({_id: req.params.id}, { $push: {questions: req.params.questionId} });
//         return res.status(201).send(questionAdded);
//     } catch (error) {
//         return res.status(500).send({ 'error': error });
//     }
// });

// Get all evaluations
router.get('/', async (req, res) => {
    try {
        const perks = await PerkTestModel.find().populate("character");
        return res.status(200).json(perks);
    } catch (error) {
        return res.status(500).json({ 'error': `There was an error while fetching the perks: ${error}` })
    }
});

// Insert an evaluation
router.post('/', async (req, res) => {
    try {
        const { title } = req.body;
        const { description } = req.body;
        const { icon } = req.body;
        const { category } = req.body;
        const { character} = req.body;

        const perkTest = await PerkTestModel.create({
            title,
            description,
            icon,
            category,
            character
        });

        return res.status(201).json(perkTest);
    } catch (error) {
        return res.status(500).json({ 'error': `There was an error while adding the questions: ${error}`});
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const perkDeletion = await PerkTestModel.deleteOne({_id});

        if (perkDeletion.deletedCount === 0) {
            return res.status(404).json({ 'error': 'No such question exists in the database' });
        } else {
            return res.status(204).json();
        }
    } catch (error) {
        return res.status(500).json({ 'error': error});
    }
});

// router.post('/:id/submission', async (req, res) => {
//     try {
//         let submission = {};
//         const { questions, student } = req.body;
//         submission.quiz = {};
//         submission.answers = [{}];
//         submission.answers.multipleChoiceAnswers = {};
//         submission.answers.question = {};
//         submission.score = {};
//         submission.quiz = await findQuizById(req.body._id);
//         submission.student = student;

//         const promises = questions.map(async (question, index) => {
//             const questionSearched = await QuestionModel.findById(question._id);
//             submission.answers[index] = {
//                 question: questionSearched,
//                 multipleChoiceAnswers: question.answer
//             };
//         });

//         await Promise.all(promises);
//         submission.score.maxPossible = submission.quiz.questions.length;
//         submission.score.total = getSubmissionScore(submission);
//         await SubmissionServices.createSubmission(submission);
//         return res.json(submission);
//     } catch (error) {
//         return res.status(500).json({ 'error': error });
//     }
// });

// // Delete a question
// router.delete('/:id', async (req, res) => {
//     try {
//         const _id = req.params.id;
//         const question = await Question.deleteOne({_id});

//         if (question.deletedCount === 0) {
//             return res.status(404).json({ 'error': 'No such question exists in the database' });
//         } else {
//             return res.status(204).json();
//         }
//     } catch (error) {
//         return res.status(500).json({ 'error': error});
//     }
// });

module.exports = router;