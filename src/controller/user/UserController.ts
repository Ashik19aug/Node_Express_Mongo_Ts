import express, {json} from "express";
const User = require('../../schema/users/User');

exports.registration = async (req:express.Request, res:express.Response):Promise<void> => {
  try {
    const formData = req.body;
    const requestBody = req.body;
    console.log('-=-=',req.body)
    res.send(requestBody);
  }
  catch(error:any) {
    res.json(error.message);
  }
};


exports.registrationVerify = async (req:express.Request, res:express.Response):Promise<void> => {
  try {
    res.send('Verify registration');
  }
  catch(error:any) {
    res.json(error.message);
  }
};


exports.regCompleteInfo = async (req:express.Request, res:express.Response):Promise<void> => {
  try {
    res.send('Registration complete information');
  }
  catch(error:any) {
    res.json(error.message);
  }
};


exports.login = async (req:express.Request, res:express.Response):Promise<void> => {
  try {
    res.send('User login');
  }
  catch(error:any) {
    res.json(error.message);
  }
};
