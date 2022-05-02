import { Navbar, Nav } from 'react-bootstrap';
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


// import { Navbar, Nav } from 'react-bootstrap';

// //[SECTION] New Task: Modify the Navbar to make it a 'funcitonal' navigation component.

// //1. Acquire the Link utility from 'react-router-dom'.
// import { Link } from 'react-router-dom';
// 	//Link -> will allow us to redirect a suer to a specific path/location.
// 		//the link component will come with a required single attribute:
// 			//to -> is used to assign a designated location or path to redirect the user.

// //Task: Modify the appearance of the Link components so that it will blend accordingly to the skin of the navbar instead of looking like an actual anchor tag.
// 	//=> solution for this is to use utility classes 

// export default function AppNavBar() {
// 	return(
// 		<Navbar>
// 		<Navbar.Brand>
// 			BOOKAS
// 		</Navbar.Brand>
// 		<Navbar.Toggle aria-controls="basic-navbar-nav"/>
// 		<Navbar.Collapse id="basic-navbar-nav">
// 			<Nav className="ml-auto">
// 				<Link className="nav-link" to="/"> Home </Link>
// 				<Link className="nav-link" to="/register"> Register </Link>
// 				<Link className="nav-link" to="/login"> Login </Link>
// 				<Link className="nav-link" to="/courses"> Courses </Link>
// 			</Nav>
// 		</Navbar.Collapse>
// 		</Navbar>
// 	)
// };