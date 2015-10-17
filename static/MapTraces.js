function MapTraces(map, segments) {
	this.map = map;
	this.segments = segments;
	this.centerMap();
}

MapTraces.prototype.centerMap = function() {
	var lats = [];
	var longs = [];
	this.segments.forEach(function(segment) {
		(segment.activities || []).forEach(function(activity) {
			activity.trackPoints.forEach(function(point, i) {
				lats.push(point.lat);
				longs.push(point.lon);
			});
		});
	});

	var minlat = Math.min.apply(Math, lats);
	var maxlat = Math.max.apply(Math, lats);
	var minlon = Math.min.apply(Math, longs);
	var maxlon = Math.max.apply(Math, longs);

	var centerlon = (maxlon + minlon) / 2;
	var centerlat = (maxlat + minlat) / 2;

	var bounds = new google.maps.LatLngBounds(
			new google.maps.LatLng(minlat, minlon),
			new google.maps.LatLng(maxlat, maxlon));
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
			strokeColor: activities[i] === 'walking' ? '#000000' : '#008000',
			strokeOpacity: 0.7,
			strokeWeight: 4,
			map: this.map
		});
	}, this);
}
