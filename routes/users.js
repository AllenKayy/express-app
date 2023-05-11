var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get("/:name/:age/:sex", (req, res) => {
  const { name, age, sex } = req.params;
  const user = { name, age, sex }
  res.json(user);
});

module.exports = router;
