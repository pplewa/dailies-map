var page = require('webpage').create();
var system = require('system');
page.open(system.args[1] + '/static/index.html', function(status) {
	console.log('saving screenshot');
	setTimeout(function(){
		page.render(system.args[1] + '/static/map.png');
		phantom.exit();
	}, 1000);
});