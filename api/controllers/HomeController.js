module.exports = {

	viewLists: function(req, res) {
		List.find({

		}, function listsViewable(err, lists){
		if(err){
			console.log('Error: '+err);
			return res.negotiate(err);
		}

		//SESSION VAR

		console.log('Lists');

		return res.json(lists);
	})
},

	createList: function(req, res){
		List.create({
			title: req.param('title'),
			createdBy: req.session.me,
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

	createItem: function(req, res){
		Item.create({
			title: req.param('title'),
			createdBy: req.session.me,
			listId: req.param('listId')
		}, function itemCreated(err, newList){
		if(err){
			console.log('Error: '+err);
			return res.negotiate(err);
		}

		//SESSION VAR

		console.log('Item Added');

		return res.json({
			id: newItem.id
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