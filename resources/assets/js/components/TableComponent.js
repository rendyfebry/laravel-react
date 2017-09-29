import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Table, Column, Cell } from 'fixed-data-table-2'
import 'fixed-data-table-2/dist/fixed-data-table.css'

const Dimensions = require('react-dimensions')

// Table data as a list of array.
const rows = [
	"first row",
	"second row",
	"third row"
];

const MyCustomCell = ({ mySpecialProp }) =>
	<Cell>
		{mySpecialProp === "column2" ? "I'm column 2" : "I'm not column 2"}
	</Cell>;

class TableComponent extends Component {
	render() {
		const { height, width, containerHeight, containerWidth, ...props } = this.props;
		console.log(containerWidth)
		return (
			<Table
				rowHeight={50}
				headerHeight={50}
				rowsCount={rows.length}
				width={containerWidth}
				height={containerHeight}
				{...props}>
				<Column
					header={<Cell>Col 1</Cell>}
					cell={<Cell>Column 1 static content</Cell>}
					flexGrow={1}
					width={20} />
				<Column
					header={<Cell>Col 2</Cell>}
					cell={<MyCustomCell mySpecialProp="column2" />}
					flexGrow={1}
					width={20} />
				<Column
					header={<Cell>Col 3</Cell>}
					cell={({ rowIndex, ...props }) => (
						<Cell {...props}>
							Data for column 3: {rows[rowIndex]}
						</Cell>
					)}
					flexGrow={1}
					width={50} />
			</Table>
		)
	}
}


module.exports = Dimensions({
	getHeight: function (element) {
		return window.innerHeight - 200;
	},
	getWidth: function (element) {
		var widthOffset = window.innerWidth < 680 ? 0 : 240;
		return window.innerWidth - widthOffset;
	}
})(TableComponent);
