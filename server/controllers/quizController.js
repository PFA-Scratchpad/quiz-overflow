const db = require('/model/model'); //update with conneect location later

/*Express - create controller file for middleware 
functions. create a function to read data from database 
(need to have database set up first) and send as response
*/
const quizerController = {};

quizerController.getQuestions = (req, res, next) => {
    const queryQestions = `SELECT ...
                        FROM...
                        ON`

    db.query(queryQestions)
      .then(result =>{
          //WHAT WILL WE DO WITH THE RESULTS OF QUERY
          res.locals.questions = ?;// TBD
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
          res.locals.choices = ?; //TBD
          return next();
      })
      .catch(err => next(err));
}