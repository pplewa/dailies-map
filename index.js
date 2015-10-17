var Express = require('express');
var phantom = require('phantom');

var app = Express();
app.use(Express.static('./'));
var server = app.listen(process.env.PORT || 3000, function() {
	console.log('Server is listening at %s', server.address().port);

	phantom.create(function (ph) {
		ph.createPage(function (page) {
			page.viewportSize = { width: 1024, height: 768 };
			page.open('http://localhost:3000/static/index.html', function (status) {
				console.log('saving screenshot');
				page.render('map.png');
				process.exit(0);
			});
		});
	});
});
