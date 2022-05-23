import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, Fragment, useContext } from 'react';
import UserContext from '../UserContext';

import {SiBuymeacoffee} from 'react-icons/si';
import {RiShoppingCartLine} from 'react-icons/ri';

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

					{ (user.id !== null) ?
						<Nav.Link as={Link} style={{ color: 'white' }} to='/logout'>Logout</Nav.Link>
						:
						<Fragment>
							<Nav.Link as={Link} style={{ color: 'white' }} to='/register'> Register </Nav.Link>
							<Nav.Link as={Link} style={{ color: 'white' }} to='/login'> Login </Nav.Link>
						</Fragment>
					}

				</Nav>
				<Navbar.Brand as={Link} to="/" className="brandName" >
					<RiShoppingCartLine style={{ color: 'white' }}  /> 
				</Navbar.Brand>
			</Navbar.Collapse>

		</Navbar>
	)
};

