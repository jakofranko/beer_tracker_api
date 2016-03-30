var Beer = require('../models/beer');

exports.get = function(req, res) {
	Beer.find({}, function(err, beer) {
		if(err) res.send(err);
		else res.json(beer);
	});
};
exports.post = function(req, res) {
	var beer = new Beer();
	beer.name = req.body.name;
	beer.type = req.body.type;
	beer.allergic = Boolean(req.body.allergic);
	beer.ingredients = req.body.ingredients;

	beer.save(function(err, beer) {
		if(err) res.send(err);
		else res.json({message: "Beer has been added successfully", data: beer});
	});
};
exports.put = function(req, res) {
	var beer = Beer.findById(req.body.id, function(err, beer) {
		if(err) res.send(err);
		else {
			beer.name = req.body.name;
			beer.type = req.body.type;
			beer.allergic = Boolean(req.body.allergic);
			beer.ingredients = req.body.ingredients;

			beer.save(function(save_err) {
				if(save_err) res.send(save_err);
				else res.json({message: "Beer has been updated successfully", data: beer});
			});
		}
	});
};
exports.delete = function(req, res) {
	Beer.remove({_id: req.params.id}, function(err) {
		if(err) res.send(err);
		else res.json({message: "Beer has been removed successfully"});
	});
};