import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import './Navbar.less';


const Navbar = (props) => {
		return (
			<form className="search-loactions" onSubmit={props.handleSubmit(props.onSubmit)}>
			 <Field placeholder="Type a location ..." name="location" component="input"/>
			 <button type="submit">Search</button>
			</form>
		)
}

export default reduxForm({form: 'searchBar'})(Navbar);