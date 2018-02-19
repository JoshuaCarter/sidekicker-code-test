import React, { Component } from "react";

import { Nav, Navbar, NavItem, NavLink, NavbarBrand } from 'reactstrap';

class NavBar extends Component {
	render() {
		//render simple navbar
		return (
			<Navbar color="navbar-dark bg-dark" dark>
				<NavbarBrand href="/">SWAPI</NavbarBrand>
				<Nav className="ml-auto" navbar>
					<NavItem>
						<NavLink href="http://www.joshuacarter.com.au" target="_blank">
							Joshua Carter
						</NavLink>
					</NavItem>
				</Nav>
			</Navbar>
		);
	}
}

export default NavBar;
