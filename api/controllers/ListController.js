module.exports = {
  myLists: function (req, res) {
    console.log('get lists for me');
    List.find({ createdBy: req.session.me }, function (err, lists) {
      if (err) return res.notFound();
      res.json(lists);
    })
  },

  userLists: function (req, res) {
    console.log('get lists for user ' + req.param('id'));
    List.find({ createdBy: req.param('id') }, function (err, lists) {
      if (err) return res.notFound();
      res.json(lists);
    })

  }
}