const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use('/build', express.static(path.resolve(__dirname, '../build')))

app.get('/', (req,res)=> {
    return res.status(200).sendFile(path.resolve(__dirname,'../index.html'))
})

app.listen(3000);
console.log('Server listening on port 3000')