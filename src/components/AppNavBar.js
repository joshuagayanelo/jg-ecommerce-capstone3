import { Navbar, Nav, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, Fragment, useContext } from 'react';
import UserContext from '../UserContext';

import {SiBuymeacoffee} from 'react-icons/si';
import {RiShoppingCartLine} from 'react-icons/ri';
import {RiListSettingsLine} from 'react-icons/ri';

export default function AppNavBar() {
	/*
		Syntax:
			localStorage.getItem(propertyName)
	*/
	// const [user, setUser] = useState(localStorage.getItem("email"));
	// console.log(user);

	const { user } = useContext(UserContext);

	return(
		<Navbar className="nav-bg" expand="lg" variant="dark">
			<Navbar.Brand as={Link} to="/" className="brandName" >
				<SiBuymeacoffee style={{ color: 'white' }}/> 
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav" >
				<Nav className="m-auto">
					<Link className="nav-link" style={{ color: 'white' }} to='/'> Home </Link>
					<Link className="nav-link" style={{ color: 'white' }} to='/products'> Products </Link>

					{ 
						(user.id !== null) ?
						<Nav.Link as={Link} style={{ color: 'white' }} to='/logout'>Logout</Nav.Link>
						:
						<Fragment>
							<Nav.Link as={Link} style={{ color: 'white' }} to='/register'> Register </Nav.Link>
							<Nav.Link as={Link} style={{ color: 'white' }} to='/login'> Login </Nav.Link>
						</Fragment>
					}


				</Nav>
				{ 
					
					(user.isAdmin === true)? 
						<Navbar.Brand as={Link} to="/admin-dashboard" className="brandName" >
							<RiListSettingsLine  style={{ color: 'white' }}  />	
						</Navbar.Brand>

					: (user.id !== null && user.isAdmin !== true ) ?
						<Navbar.Brand as={Link} to="/cart" className="brandName" >
							<RiShoppingCartLine style={{ color: 'white' }}  />
						</Navbar.Brand>
					:
						<Navbar.Brand className="brandName" >
							<RiShoppingCartLine style={{ color: 'transparent' }}  />
						</Navbar.Brand>
				}
				
			</Navbar.Collapse>

		</Navbar>
	)
};

