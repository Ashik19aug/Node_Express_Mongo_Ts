import { express, http, bodyParser, cookieParser, compression, cors } from './lib/importRoot';
// import express from 'express';
// import http from 'http';
// import bodyParser from "body-parser";
// import cookieParser from "cookie-parser";
// import compression from "compression";
// import cors from "cors";

const app = express();
const DbConnection = require('./dataBase/Connection');
const routes = require('./routes/index');

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

// use all custom created routes
app.use('/boilerplate-app',routes);

const server = http.createServer(app);
const port = 2222;
DbConnection().then(()=>{
  server.listen(port, () => {
    console.log('Successfully database connected');
    console.log(`Server listening on http://127.0.0.1:${port}/`);
  });
});
