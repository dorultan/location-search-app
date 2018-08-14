import React, {Component} from 'react';
import {connect} from 'react-redux';

import GoogleMap from '../components/map/GoogleMap';

class GoogleMapContainer extends Component {

	constructor(props) {
		super(props);
	}

	shouldComponentUpdate(nextProps) {

		return this.props.locations !== nextProps.locations;
	}

	render() {

		if(typeof this.props.locations === 'string') {
			return (
				<h1>Error</h1>
			)
		}

		else {
			return (
				<GoogleMap locations={this.props.locations}/>
			)
		}
	}
}

const mapStateToProps = ({locations}) => {
	return {
		locations
	}
}

export default connect(mapStateToProps, null)(GoogleMapContainer);