module.exports = {
  myLists: function (req, res) {
    if (!req.session.me) return res.badRequest();
    List.find({ createdBy: req.session.me }, function (err, lists) {
      if (err) return res.notFound();
      res.json(lists);
    });
  },

  userLists: function (req, res) {
    if (!req.session.me) return res.badRequest();
    List.find({ createdBy: req.param('id') }, function (err, lists) {
      if (err) return res.notFound();
      res.json(lists);
    });
  }
}