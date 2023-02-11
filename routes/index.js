var express = require('express');
var router = express.Router();

let messages = [
  {
    text: "hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages});
});

router.post('/new', function(req, res) {

  const user = req.body.message_name;
  const text = req.body.message_text;

  messages.push({ text, user, added: new Date() });

  res.redirect('/');
});


module.exports = router;

