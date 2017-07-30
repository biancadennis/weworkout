var express = require('express');
var router = express.Router();
var models = require('../models')
var User     = models.user;

/* GET users listing. */
router.get('/', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  User.findAll().then(function(users){
    res.json(users)
  })

  // res.json([{
  // 	id: 1,
  // 	username: "samsepi0l",
  //   nickname: 'whatever'
  // }, {
  // 	id: 2,
  // 	username: "D0loresH4ze",
  //   nickname: 'asdf'
  // }]);
});
// router.get('/:id', function(request, response) {
//   User.findById(request.params.id).then(function(user) {
//     Photo.findAll({include: User}).then(function(photos) {
//       response.render('user/userpage', {
//         user: user,
//         // photos: photos
//       });
//     });
//   });
// });
module.exports = router;
