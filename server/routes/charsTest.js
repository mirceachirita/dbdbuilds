const express = require('express');
const router = express.Router();
const CharTestModel = require('../models/charTest');

// Get all evaluations
router.get('/', async (req, res) => {
    try {
        const chars = await CharTestModel.find();
        return res.status(200).json(chars);
    } catch (error) {
        return res.status(500).json({ 'error': `There was an error while fetching the characters: ${error}` })
    }
});

// Insert an evaluation
router.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        const { icon } = req.body;
        const { category } = req.body;

        const charTest = await CharTestModel.create({
            name,
            icon,
            category
        });

        return res.status(201).json(charTest);
    } catch (error) {
        return res.status(500).json({ 'error': `There was an error while adding the questions: ${error}`});
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