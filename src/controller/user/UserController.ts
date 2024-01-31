import express from "express";
const User = require('../../schema/users/User');

exports.registration = async (req:express.Request, res:express.Response):Promise<void> => {
  try {
    console.log('registration function called');
  }
  catch(error:any) {
    res.json(error.message);
  }
};
