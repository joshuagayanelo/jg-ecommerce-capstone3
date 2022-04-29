import {Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AppNavBar() {
	return(
		<Navbar bg="light" expang="lg">
			<Navbar.Brand>
				ARRAL
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Link className="nav-link"to='/'> Home </Link>
					<Link className="nav-link"to='/Register'> Register </Link>
					<Link className="nav-link"to='/Login'> Login </Link>
					<Link className="nav-link"to='/Courses'> Courses </Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
};