import express from 'express';
import http from 'http';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";


const app = express();
const DbConnection = require('./DataBase/Connection');

app.use(cors({ credentials : true }));
app.use(compression);
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

DbConnection().then(()=>{
  server.listen(8080, () => {
    console.log('Successfully database connected');
    console.log('Server listening on http://localhost:8080/');
  });
});


// const MONGODB_URL = 'mongodb+srv://ashikshafayet:RMLK4ksBnfG2NzcK@cluster0.ynzrzuj.mongodb.net/';
//
// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URL);
// mongoose.connection.on('error', (error:Error) => {console.log('Connection Error: ',error)})

// let InitialMessage : string = "Initial Node TypeScript project Setup ";
// console.log(InitialMessage);
