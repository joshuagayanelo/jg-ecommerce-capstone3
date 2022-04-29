import {Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function AppNavbar() {
	return(
		<Navbar bg="light" expang="lg">
			<Navbar.Brand>
				Course Booking App B164
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Link className="ml-1"to='/Home'> Home </Link>
					<Link className="ml-1"to='/Register'> Register </Link>
					<Link className="ml-1"to='/Login'> Login </Link>
					<Link className="ml-1"to='/Courses'> Courses </Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
};