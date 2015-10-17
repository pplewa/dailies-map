var Express = require('express');
var phantom = require('phantom');
var fs = require('fs');
var Q = require('q');

var app = Express();
app.use(Express.static('./'));

function convertToMap(segments) {
	var deferred = Q.defer();

	fs.writeFileSync('static/segments.json', JSON.stringify(segments));
	var server = app.listen(process.env.PORT || 3000, function() {
		console.log('Server is listening at %s', server.address().port);

		phantom.create(function (ph) {
			ph.createPage(function (page) {
				page.viewportSize = { width: 1024, height: 768 };
				page.open('http://localhost:3000/static/index.html', function (status) {
					console.log('saving screenshot');
					page.render('static/map.png');
					deferred.resolve('http://localhost:3000/static/map.png');
					// process.exit(0);
				});
			});
		});
	});

	return deferred.promise;
}

module.exports.convertToMap = convertToMap;