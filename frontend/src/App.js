import React, { Component } from 'react';
import './App.css';
import SWAPI from './SWAPI';
import NavBar from './components/NavBar';
import PersonPage from './components/PersonPage';

import { Container } from 'reactstrap';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			pages: 0,
			people: [],
		}
	}

	//init
	componentDidMount() {
		//load page 1 of people by default
		this.onPageClick(1);
	}

	/**
	 * used as callback for pagination links
	 * @param {int} page 
	 */
	onPageClick(page) {
		//reset people (so doesn't look like hang)
		this.setState({
			people: []
		});
		//query lumen API for new page of people
		SWAPI.getPeople(page, this.handlePeople.bind(this));
	}

	/**
	 * handler for new page of people
	 * @param {Object} response 
	 */
	handlePeople(response) {
		//store response data in state
		this.setState({
			page_id: response.data.page_id,
			page_count: response.data.page_count,
			people: response.data.people,
		});
	}

	render() {
		return (
			//render navbar and page of people
			<Container>
				<NavBar></NavBar>
				<PersonPage
					page_id={this.state.page_id}
					page_count={this.state.page_count}
					onPageClick={(page) => this.onPageClick(page)}
					people={this.state.people}>
				</PersonPage>
			</Container>
		);
	}
}

export default App;
