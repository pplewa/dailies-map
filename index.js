var phantom = require('phantom');
var fs = require('fs');
var Q = require('q');

function convertToMap(segments) {
	var deferred = Q.defer();

	fs.writeFileSync(__dirname + '/static/segments.js', 'window.segments = ' + JSON.stringify(segments));
	phantom.create(function(ph) {
		ph.createPage(function(page) {
			page.viewportSize = { width: 1024, height: 768 };
			page.open(__dirname + '/static/index.html', function(status) {
				console.log('saving screenshot');
				page.render(__dirname + '/static/map.png');
				deferred.resolve(__dirname + '/static/map.png');
				ph.exit();
			});
		});
	}, {
		path: '/usr/local/bin/'
	});

	return deferred.promise;
}

module.exports.convertToMap = convertToMap;