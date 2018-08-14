import React, {Component} from 'react';
import {bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';
import {reduxForm}  from 'redux-form';

import {fetchLocations} from '../actions';

import Navbar from '../components/navbar/Navbar';

class NavbarContainer extends Component {
	constructor(props) {
		super(props);

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(formProps) {
		
		this.props.fetchLocations(formProps.location);
	}

	render() {
		return (
			<Navbar onSubmit={this.onSubmit}/>
		)
	}
}

const bindStatetoProps = ({locations}) => {

	return {
		locations: locations
	}
}

const bindActionCreatorsToProps = (dispatch) => {

	return bindActionCreators({
		fetchLocations: fetchLocations
	}, dispatch)
}

export default connect(bindStatetoProps, bindActionCreatorsToProps)(NavbarContainer);