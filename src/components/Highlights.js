import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function Highlights() {
	return(
		<Row className="mt-5 mb-5" >
			<Col xs={12} md={4}>
				<Card className = "p-3 cardHighlight">
					<Card.Body>
						<Card.Title>Learn From Home</Card.Title>
						<Card.Text>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, sint! Tenetur, nostrum! Perspiciatis, consequuntur impedit!
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>

			<Col xs={12} md={4}>
				<Card className = "p-3 cardHighlight">
					<Card.Body>
						<Card.Title>Study Now, Pay Later</Card.Title>
						<Card.Text>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, sint! Tenetur, nostrum! Perspiciatis, consequuntur impedit!
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>

			<Col xs={12} md={4}>
				<Card className = "p-3 cardHighlight">
					<Card.Body>
						<Card.Title>Be Part of our Community</Card.Title>
						<Card.Text>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, sint! Tenetur, nostrum! Perspiciatis, consequuntur impedit!
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>		
	);
};




