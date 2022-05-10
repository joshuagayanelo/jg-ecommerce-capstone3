import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, Fragment, useContext } from 'react';
import UserContext from '../UserContext';

export default function AppNavBar() {
	/*
		Syntax:
			localStorage.getItem(propertyName)
	*/
	// const [user, setUser] = useState(localStorage.getItem("email"));
	// console.log(user);

	const { user } = useContext(UserContext);

	return(
		<Navbar bg="light" expand="lg">
			<Navbar.Brand as={Link} to="/" >
				ARRAL
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Link className="nav-link" to='/'> Home </Link>
					<Link className="nav-link" to='/Courses'> Courses </Link>

					{ (user.email !== null) ?
						<Nav.Link as={Link} to='/Logout'>Logout</Nav.Link>
						:
						<Fragment>
							<Nav.Link as={Link} to='/Register'> Register </Nav.Link>
							<Nav.Link as={Link} to='/Login'> Login </Nav.Link>
						</Fragment>
					}

				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
};

