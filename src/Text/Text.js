import React, { Component } from 'react';
import TableAndForm from './TableAndForm';
class Text extends Component{
	render(){
		return(<div className="tag0">
				<h1>INVOICE</h1>
				<hr id="hr1" />
				<h2 className="tag1">My Company Name</h2>
				<p className="tag2">Tata Consultancy Services<br/>
				phone:9999999999<br/>
				email:tcsglobal@tcs.com</p><br />
				<br />
				<br/>
				<hr />				
			</div>);
	}
}

export default Text;