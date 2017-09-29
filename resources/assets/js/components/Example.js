import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import TableComponent from "./TableComponent.js"

export default class Example extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-8 col-md-offset-2">
						<div className="panel panel-default">
							<div className="panel-heading">Example Component</div>

							<div className="panel-body">
								<TableComponent />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

if (document.getElementById('example')) {
	ReactDOM.render(<Example />, document.getElementById('example'));
}
