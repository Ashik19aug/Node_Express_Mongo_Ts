import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import * as process from "process";
dotenv.config();

const MONGODB_URL:string|undefined = process.env.MONGODB_URL;

async function DB_Connection() {
  if (MONGODB_URL != null) {
    await mongoose.connect(MONGODB_URL);
  }
  mongoose.connection.on('error', (error: Error) => {
    console.log('Connection Error: ', error);
  })

}

module.exports = DB_Connection;
