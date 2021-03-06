const db = require('../models/quizModels'); 
const quizerController = {};

quizerController.getQuestion = (req, res, next) => {
    console.log('get question fired');
     //grab random record from quiz qestion table
    const queryQestion = `SELECT *
                        FROM quiz_question
                        ORDER BY RANDOM()
                        LIMIT 1`

    db.query(queryQestion)
      .then(result =>{
            //create const to hold value of qestion ID
            const RandQuestionId = result.rows[0]._id;
            //create const to hold value of question text
            const RandQuestionText = result.rows[0].text;
          res.locals.question = RandQuestionText
          console.log(RandQuestionId, `${res.locals.question}`);
            //selected id,text, and iscorrect from quiz questions table, only grabing questions which match random question ID
        const queryChoices =`SELECT 
                                c._id, 
                                c.text, 
                                c.is_correct
                            FROM
                                quiz_question_choices c
                            WHERE
                            c.quiz_question_id = ${RandQuestionId}`
    
            db.query(queryChoices)
            .then(Qresult =>{
                //choices const holds array of questions
                res.locals.choices = Qresult.rows;
                console.log(res.locals.choices)
            })
          return next();
      })
      .catch(err => next(err));
};
module.exports = quizerController