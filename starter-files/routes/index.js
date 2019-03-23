const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const david = { name: 'David', age: '28', cool: true };
  // res.send('Hey! It works! David is the best :) ');
  // res.json(david);
  res.send(req.query);
});

router.get('/test', function(req, res) {
  res.send('Hey! I work');
});
module.exports = router;
