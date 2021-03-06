const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const quizerController = require('./controllers/quizController')

const app = express();
app.use(express.json());

app.use('/build', express.static(path.resolve(__dirname, '../build')))

app.get('/', (req,res)=> {
    //get request to login/ signup page
    return res.status(200).
    sendFile(path.resolve(__dirname,'../index.html'))
})

app.get('/quizoverflow', quizerController.getQuestion, (req,res)=>{
    res.status(200)
    res.json(res.locals)
})

app.use((req, res, next)=>{
    res.status(404)
    .send('Not Found')
}
)

app.listen(3000);
console.log('Server listening on port 3000')