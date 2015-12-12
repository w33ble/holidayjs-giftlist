module.exports = {

	createList: function(res, req){
		List.create({
			title: "hello",
			createdBy: req.session.me
	}, function listCreated(err, newList){
		if(err){
			console.log('Error: '+err);
			return res.negotiate(err);
		}

		//SESSION VAR

		console.log('List Added');

		return res.json({
			id: newList.id
		});
	})
},

	checkUser: function(req, res){
		if (!req.session.me) {
			console.log('Nobody is logged in');
			return res.view('login');

		} else {
			console.log(req.session.me + ' is logged in');
			return res.view('home');	
		}
	},

	updatePoints: function(req, res){
		User.update({
			points: req.param('points')
		})
	}
};