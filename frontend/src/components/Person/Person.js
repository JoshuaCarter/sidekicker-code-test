import React, { Component } from "react";

import { Card, CardHeader, CardTitle, CardBody, Button, Collapse } from 'reactstrap';

class Person extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isOpen: false, //for collapse
		}
	}

	/**
	 * button callback for toggling collapse
	 */
	onClickOpen() {
		//toggle collapse
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	/**
	 * hacky method for making property names look properly formed
	 * E.g. 'hair_color' = 'Hair Color'
	 * @param {string} prop_name key from key/val pair
	 */
	formatString(prop_name) {
		let output = '';
		let last = '';

		//go through chars in name
		for (let i = 0; i < prop_name.length; ++i) {
			let c = prop_name.charAt(i);

			//capitals at start and after spaces/underscore
			if (last === ' ' || last === '' || last === '_') {
				output += c.toUpperCase();
			}
			//replace underscore with space
			else if (c === '_') {
				output += ' ';
			}
			//else leave as is
			else {
				output += c;
			}

			last = c;
		}

		return output;
	}

	/**
	 * render the person's props (name, height, etc)
	 */
	renderProps() {
		//helper func for printing multiple lines to <td>
		let expandValues = (value) => {
			let output = [];

			//wrap each string in div (block ele without padding)
			for (let i = 0; i < value.length; ++i) {
				output.push(
					<div key={i}>{value[i]}</div>
				);
			}

			return output;
		};

		let output = [];

		//for each prop/detail of the person to list
		for (let d in this.props.data) {
			//prettify prop name
			let name = this.formatString(d);
			let value = this.props.data[d];

			//if array, wrap each string in div tags
			if (Array.isArray(value)) {
				value = expandValues(value);
			}

			//output each prop as table row
			output.push(
				<tr key={d} style={{ borderBottom: '1px solid #DFDFDF' }}>
					<td style={{ width: '50%' }} className="align-top pr-5"><strong>{name}:</strong></td>
					<td>{value}</td>
				</tr>
			);
		}

		return output;
	}

	render() {
		//render a card with collapsable body of props
		return (
			<Card>
				<CardHeader>
					<CardTitle className="mb-0">{this.props.data.name}</CardTitle>
				</CardHeader>
				<Collapse isOpen={this.state.isOpen}>
					<CardBody>
						<table style={{ width: '100%' }}>
							<tbody>
								{this.renderProps()}
							</tbody>
						</table>
					</CardBody>
				</Collapse>
				{/* collapse button */}
				<Button
					color="link"
					style={{ textDecoration: 'none' }}
					size="sm"
					block
					onClick={() => { this.onClickOpen() }}>
					{this.state.isOpen ? "Collapse" : "Expand"}
				</Button>
			</Card>
		);
	}

}

export default Person;