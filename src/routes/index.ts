import express from "express";

const router = express.Router();
const usersRouter = require('./user/index.ts');

router.get('/test', (req:express.Request, res:express.Response) => {
  res.render('index', {title: 'Play with node and mongo', message: 'Hey Lets Play with node and mongo'})
})
//use all the routes from userRouter
// router.use(usersRouter);

module.exports = router
