var page = require('webpage').create();
var system = require('system');
page.open(system.args[1], function(status) {
	console.log('saving screenshot');
	setTimeout(function(){
		page.render(system.args[2]);
		phantom.exit();
	}, 1000);
});