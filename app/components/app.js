import React from 'react';
import GoogleMapContainer from '../containers/GoogleMapContainer';
import NavbarContainer from '../containers/NavbarContainer';
import './app.less';

const App = () => {

	return (
		<div>
		  <NavbarContainer/>
		  <GoogleMapContainer></GoogleMapContainer>
		</div>
	)
}

export default App;