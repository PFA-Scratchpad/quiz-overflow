const db = require('../models/quizModels'); //update with conneect location later

/*Express - create controller file for middleware 
functions. create a function to read data from database 
(need to have database set up first) and send as response
*/
const quizerController = {};

quizerController.getQuestion = (req, res, next) => {
    const queryQestion = `SELECT *
                        FROM quiz_question`

    db.query(queryQestion)
      .then(result =>{
          //WHAT WILL WE DO WITH THE RESULTS OF QUERY
          console.log(result)
          res.locals.question = result// TBD
          return next();
      })
      .catch(err => next(err));
};

quizerController.getChoices = (req, res, next) =>{
    const queryChoices = `SELECT ...
                            FROM...
                            ON`
    db.query(queryChoices)
      .then(result =>{
          res.locals.choices = result //TBD
          return next();
      })
      .catch(err => next(err));
}