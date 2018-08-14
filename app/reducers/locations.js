import {FETCH_LOCATIONS} from '../actions/types';

const locations = (state = null, action) => {
	// The possibile location match
	// or the list of locations

	switch(action.type) {

		case FETCH_LOCATIONS:

			return action.payload;

		default:

			return state;
	}
}

export default locations;