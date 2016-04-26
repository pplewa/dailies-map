function MapTraces(map, segments) {
	this.map = map;
	this.segments = segments;
	this.colors = [
		'#e51c23',
		'#795548',
		'#9c27b0',
		'#3f51b5',
		'#03a9f4',
		'#8bc34a',
		'#009688'
	];
	this.centerMap();
}

MapTraces.prototype.centerMap = function() {
	var lats = [];
	var longs = [];

	if (this.segments[0].segments) {
		this.segments.forEach(function(daily){
			daily.segments.forEach(function(segment) {
				(segment.activities || []).forEach(function(activity) {
					activity.trackPoints.forEach(function(point, i) {
						lats.push(point.lat);
						longs.push(point.lon);
					});
				});
			});
		});
	} else {
		this.segments.forEach(function(segment) {
			(segment.activities || []).forEach(function(activity) {
				activity.trackPoints.forEach(function(point, i) {
					lats.push(point.lat);
					longs.push(point.lon);
				});
			});
		});
	}

	var minlat = Math.min.apply(Math, lats);
	var maxlat = Math.max.apply(Math, lats);
	var minlon = Math.min.apply(Math, longs);
	var maxlon = Math.max.apply(Math, longs);

	var centerlon = (maxlon + minlon) / 2;
	var centerlat = (maxlat + minlat) / 2;

	var bounds = new google.maps.LatLngBounds(
		new google.maps.LatLng(minlat, minlon),
		new google.maps.LatLng(maxlat, maxlon)
	);
	this.map.setCenter(new google.maps.LatLng(centerlat, centerlon));
	this.map.fitBounds(bounds);
}

MapTraces.prototype.addTracksToMap = function() {
	var paths = [];
	var activities = [];
	var previousActivity = '';
	this.segments.forEach(function(segment) {
		if(segment.type == 'move' && Array.isArray(segment.activities)) {
			segment.activities.forEach(function(activity) {
				if (activity.activity === previousActivity) {
					activity.trackPoints.forEach(function(point, i) {
						paths[paths.length-1].push(
							new google.maps.LatLng(parseFloat(point.lat), parseFloat(point.lon))
						);
					});
				} else {
					previousActivity = activity.activity === 'walking' ? 'walking' : 'move';
					var _temp = [];
					activity.trackPoints.forEach(function(point, i) {
						_temp.push(
							new google.maps.LatLng(parseFloat(point.lat), parseFloat(point.lon))
						);
					});
					paths[paths.length] = _temp;
					activities[paths.length] = previousActivity;
				}
			});
		}
	});

	paths.forEach(function(path, i) { 
		var polyline = new google.maps.Polyline({
			path: path,
			strokeColor: activities[i+1] === 'walking' ? '#008000' : '#222222',
			strokeOpacity: 0.6,
			strokeWeight: 4,
			map: this.map
		});
	}, this);
}

MapTraces.prototype.addWeeklyTracksToMap = function() {
	this.segments.forEach(function(daily, index){
		var paths = [];
		daily.segments.forEach(function(segment) {
			if(segment.type == 'move' && Array.isArray(segment.activities)) {
				segment.activities.forEach(function(activity) {
					activity.trackPoints.forEach(function(point, i) {
						paths.push(
							new google.maps.LatLng(parseFloat(point.lat), parseFloat(point.lon))
						);
					});
				});
			}
		});

		var polyline = new google.maps.Polyline({
			path: paths,
			strokeColor: this.colors[index],
			strokeOpacity: 0.7,
			strokeWeight: 5,
			map: this.map
		});
	}, this);
}

MapTraces.prototype.addMarkersToMap = function() {
	var paths = [];
	this.segments.forEach(function(segment) {
		if(segment.type == 'place') {
			paths.push(new google.maps.LatLng(
				parseFloat(segment.place.location.lat), 
				parseFloat(segment.place.location.lon)
			));
		}
	});

	paths.forEach(function(path, i) { 
		var marker = new google.maps.Marker({
			position: path,
			map: this.map,
			icon: 'pin.png'
		});
	}, this);
}

MapTraces.prototype.addLegend = function() {
	var docFrag = document.createDocumentFragment();
	this.segments.forEach(function(segment, index){
		var date = segment.date.substr(6,2) + '/' + segment.date.substr(4,2) + '/' + segment.date.substr(0,4);
		var listElement = document.createElement('li');
		listElement.style.backgroundColor = this.colors[index];
		listElement.innerHTML = date;
		docFrag.appendChild(listElement);
	}, this);
	document.getElementById('legend').appendChild(docFrag);
}