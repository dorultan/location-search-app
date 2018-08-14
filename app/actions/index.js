import {FETCH_LOCATIONS} from './types';

const API_KEY = 'AIzaSyDFCGhI5GwdAOYBDcW9Foue4gH4JuHnlAs';
// @param(s): Location - The input from the user. it can be a postcode or locations.

export const fetchLocations = (location) => {
	
	const payload = new Promise((resolve, reject) => {

		const request = {
			query: location
		};

		const service = new google.maps.places.PlacesService(map);
		service.textSearch(request, (results, status) => {

			if(status == google.maps.places.PlacesServiceStatus.OK) {
				resolve(results);
			}

			else {
				reject(status);
			}
		})
	})

	return {
		type: FETCH_LOCATIONS,
		payload: payload
	}
}