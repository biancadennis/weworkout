var express = require('express');
var router = express.Router();
var models = require('../models')
var User     = models.user;
var passport = require('passport');
var local    = require('passport-local');
var bcrypt   = require('bcrypt');

passport.use(
	new local.Strategy(
		function(email, password, done) {
	    User.findOne({
				where: {
					email: email
				}
			}).then(function(user) {
	      if (!user)
	        return(done(null, false, {message: 'A user with that email does not exist.'}));
	      else {
					bcrypt.compare(password, user.password, function(error, result) {
						if (result)
				      return(done(null, user));
						else
			        return(done(null, false, {message: 'Incorrect password.'}));
        	});
				}
	    });
	  }
	)
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id).then(function(user) {
    done(null, user);
  });
});

router.post('/sign-up', function(request, response) {
	console.log('request: ', request.body)
	bcrypt.hash(request.body.password, 10, function(error, password) {
    console.log("hello");
		User.create({
			email:    request.body.email,
			password: password,
			location: request.body.location,
			name:     request.body.name,
      fitnesslevel: request.body.fitnesslevel,
      gender: request.body.gender,
			goals: request.body.goals,
      username: request.body.username
		}).then(function(user) {
			console.log('user:', user)
			request.login(user, function(error) {
				response.redirect(`/users/${request.user.id}`);
			});
		}).catch(function(error) {
			console.log('error:', error)
			response.render('signup', {
				user:   request.body,
				errors: error.errors
			});
		});
	});
	// response.json({hi: 'bianca'})
});

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
router.get('/:id', function(request, response) {
  User.findById(parseInt(request.params.id)).then(function(user) {
    // console.log(response.json(user))
    console.log('user', user)
    response.json(user)
  })
    // Photo.findAll({include: User}).then(function(photos) {
    //   response.render('user/userpage', {
    //     user: user,
    //     // photos: photos
    //   });
    // });
});
module.exports = router;
