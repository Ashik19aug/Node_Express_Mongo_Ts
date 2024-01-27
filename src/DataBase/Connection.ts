import mongoose from "mongoose";

const MONGODB_URL:string = 'mongodb+srv://ashikshafayet:RMLK4ksBnfG2NzcK@cluster0.ynzrzuj.mongodb.net/';

async function DB_Connection() {
  await mongoose.connect(MONGODB_URL);
  mongoose.connection.on('error', (error: Error) => {
    console.log('Connection Error: ', error);
  })

}

module.exports = DB_Connection;
