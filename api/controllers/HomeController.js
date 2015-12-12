module.exports = {

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