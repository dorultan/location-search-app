import {combineReducers} from 'redux';
import locations from './locations';
import {reducer as formProps} from 'redux-form';


const rootReducer = combineReducers({
	locations: locations,
	form: formProps
})

export default rootReducer;