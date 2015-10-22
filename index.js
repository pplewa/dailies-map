var fs = require('fs');
var Q = require('q');
var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path

var childArgs = [
  path.join(__dirname, 'script.js'),
  path.join(__dirname, '/static/index.html'),
  path.join(__dirname, '/static/map.png')
];

var weeklyArgs = [
  path.join(__dirname, 'script.js'),
  path.join(__dirname, '/static/weekly.html'),
  path.join(__dirname, '/static/weekly.png')
];

function convertToMap(segments) {
	var deferred = Q.defer();

	fs.writeFileSync(__dirname + '/static/segments.js', 'window.segments = ' + JSON.stringify(segments));
	childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
		if (err) {
			return deferred.reject(err);
		}
		deferred.resolve(__dirname + '/static/map.png');
	})
	return deferred.promise;
}

function convertToWeeklyMap(segments) {
	var deferred = Q.defer();

	fs.writeFileSync(__dirname + '/static/segments.js', 'window.segments = ' + JSON.stringify(segments));
	childProcess.execFile(binPath, weeklyArgs, function(err, stdout, stderr) {
		if (err) {
			return deferred.reject(err);
		}
		deferred.resolve(__dirname + '/static/weekly.png');
	})
	return deferred.promise;
}

module.exports.convertToMap = convertToMap;
module.exports.convertToWeeklyMap = convertToWeeklyMap;