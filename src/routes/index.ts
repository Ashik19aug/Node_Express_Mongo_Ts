import express from "express";
const router = express.Router();


const userRouter = require('./user/index.ts');

router.get('/', (req:express.Request, res:express.Response) => {
  res.send('Hello from the router!');
})
//use all the routes from userRouter
router.use(userRouter);

module.exports = router
