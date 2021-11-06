const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');

const port = 8080;
const app = express();

const mongoOptions = {}
function handleErrorMongo(error){
    console.log(error);
}

mongoose.connect('mongodb://localhost:27017/curso-basico-mern', mongoOptions).then(
    () => { console.log('MongoDB conectado com sucesso')},
    error => {handleErrorMongo(error)}
);

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routes);

function logErrors (err, req, res, next) {
    console.log("estou no logErrors")
    console.error(err.stack)
    next(err)
}
function errorHandler (err, req, res, next) {
    res.status(500)
    console.log("estou no ErrorHandler")
    res.render('error', { error: err })
}

app.use(logErrors);
app.use(errorHandler);

app.listen(port, function(err){
    if (err) console.log(err);
    console.log(`server listening on port ${port}`);
});

process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing http server.');
    server.close(() => {
      console.log('Http server closed.');
      // boolean means [force], see in mongoose doc
      mongoose.connection.close(false, () => {
        console.log('MongoDb connection closed.');
        process.exit(0);
      });
    });
  });