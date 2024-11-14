var express = require("express");
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express', id: req.params.id,
//     category: req.params.category,  });

// });
router.get("/demo2/(:id)/(:category)", function (req, res, next) {
  res.render("demo2", {
    id: req.params.id,
    category: req.params.category,
  });
});

module.exports = router;
