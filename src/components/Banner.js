import { Col, Row } from 'react-bootstrap'; 

export default function Banner() {
	return(
       <Row>
			<Col className="p-5 m-3">
			   <h1>Welcome to the App</h1>
			   <p>Lorem, ipsum, dolor sit amet consectetur adipisicing elit.</p>
			</Col>          
       </Row>
	);
};
