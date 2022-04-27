import {Navbar, Nav } from 'react-bootstrap';

export default function AppNavbar() {
	return(
		<Navbar bg="light" expang="lg">
			<Navbar.Brand>
				Course Booking App B164
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link> Register </Nav.Link>
					<Nav.Link> Login </Nav.Link>
					<Nav.Link> Courses </Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}; 