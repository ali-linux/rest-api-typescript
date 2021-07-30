import express  from "express";
const router = express.Router();

const test = router.get('/testing', (req, res) => {
  res.send('hello world')
})

const test2 = router.get('/testing2', (req, res) => {
  res.send('hello world2')
})

export = router;
// module.exports = router
