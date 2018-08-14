import React, {Component} from 'react';
import './GoogleMap.less';

class GoogleMap extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		let mapCenter = new google.maps.LatLng(51.509865,-0.118092);
		let map;
		map = new google.maps.Map(document.getElementById('map'), {
			center: mapCenter,
			zoom: 15
		})


		window.map = map;
	}

	removeMarker(markers) {
		markers.map((marker) => {
			marker.setMap(null);
		})
	}

	createMarker(locations) {
		var bounds = new google.maps.LatLngBounds();
		var markers = [];
		locations.map((place) => {
			let placeLoc = place.geometry.location;
			let marker = new google.maps.Marker({
				position: new google.maps.LatLng(placeLoc.lat(), placeLoc.lng()),
				map: map
			})

			bounds.extend(marker.position)
			markers.push(marker)
		})
		map.fitBounds(bounds);
		let listener = google.maps.event.addListener(map, "idle", function() { 
		  if (map.getZoom() > 16) map.setZoom(16); 
		  google.maps.event.removeListener(listener); 
		});

	}

	componentDidUpdate(prevLocation) {
		this.createMarker(this.props.locations);
	}

 	render() {

		return (
		 <div id="map"></div>
		)
	}
}

export default GoogleMap;