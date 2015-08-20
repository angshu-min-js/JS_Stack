/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	//sign up function
	signup: function(req, res){
		console.log("Backend Signup");

		var Passwords = require('machinepack-passwords');

		//encryptPassword

		Passwords.encryptPassword({
			password: req.param('password'),
			difficulty: 10
		}).exec({
			error: function(err){
				return res.negotiate(err);
			},
			success: function(encryptedPassword){
				require('machinepack-gravatar').getImageUrl({
					emailAddress: req.param('email')
				}).exec({
					error: function(err){
						return res.negotiate(err);
					},
					success: function(gravatarUrl){
						// Create User
						User.create({
							name: req.param('name'),
							email: req.param('email'),
							password: encryptedPassword,
							lastLoggedIn: new Date(),
							gravatarUrl: gravatarUrl
						}, function userCreated(err, newUser){
								if(err){
									console.log('Error '+err);
									return res.negotiate(err)
								}

								//Session var
								console.log('User Added');
								return res.json({
									id: newUser.id
								})
						})
					}
				})
			}
		})
	},
	login: function(req, res){
		// validation
		User.findOne({
			email: req.param('email')
		}, function foundUser(err, user){
			if(err){
				console.log("Backend err");
				return res.negotiate(err);
			}
			if(!user){
				console.log("backend not found");
				return res.notFound();
			}

			require('machinepack-passwords').checkPassword({
				passwordAttempt: req.param('password'),
				encryptedPassword: user.password
			}).exec({
				error: function(err){
					console.log("backend password error");
					return res.negotiate(err);
				},
				incorrect: function(){
					console.log("backend password incorrect");
					return res.notFound();
				},
				success: function(){
					req.session.me = user.id;
					console.log("bk success");
					return res.ok();
				}
			})
		})

	},

	logout: function(req, res){
		User.findOne({id: req.session.me}, function(err, user){

			if(err){
				return res.negotiate(err);
			}
			if(!user){
				return res.notFound();
			}

			req.session.me = null;
			return res.redirect('/')
		})
	}
};
