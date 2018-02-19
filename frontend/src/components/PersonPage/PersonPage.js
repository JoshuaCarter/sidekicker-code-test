import React, { Component } from "react";
import Person from '../Person'

import './PersonPage.css';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class PersonPage extends Component {

	//pagination
	renderPageLinks() {
		let pageLinks = [];

		//show page link per page
		for (let i = 1; i <= this.props.page_count; ++i) {
			//active attr
			let active_item = this.props.page_id === i ? true : undefined;
			//click callback to API.js
			let on_click = () => this.props.onPageClick(i);
			//add link to array
			pageLinks.push(
				<PaginationItem key={i} active={active_item}>
					<PaginationLink href="#" onClick={on_click}>{i}</PaginationLink>
				</PaginationItem>
			);
		}

		//whether prev/next links should be active
		let disabled_prev = this.props.page_id === 1 ? true : undefined;
		let disabled_next = this.props.page_id === this.props.page_count ? true : undefined;
		//and what page they callback to
		let on_click_prev = () => this.props.onPageClick(this.props.page_id - 1);
		let on_click_next = () => this.props.onPageClick(this.props.page_id + 1);

		//render pagination + links
		return (
			<Pagination className="mt-2" style={{ justifyContent: 'center' }}>
				<PaginationItem disabled={disabled_prev}>
					<PaginationLink previous href="#" onClick={on_click_prev} />
				</PaginationItem>
				{pageLinks}
				<PaginationItem disabled={disabled_next}>
					<PaginationLink next href="#" onClick={on_click_next} />
				</PaginationItem>
			</Pagination>
		);
	}

	render() {
		//if no people to render
		if (this.props.people.length === 0) {
			//show loader animation
			return (
				<div className="d-flex justify-content-center">
					<div className="loader"></div>
				</div>
			);
		}

		//else render people and pagination links
		return (
			<div>
				{
					this.props.people.map((p, i) =>
						<Person key={i} data={p}></Person>
					)
				}
				{this.renderPageLinks()}
			</div>
		);
	}
}

export default PersonPage;
