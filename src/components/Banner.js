//Lets create our first reusable component.
//The purpose of this component is to be a header across the pages inside our application.


//1. identify and prepare the needed ingredients.
  //main ingredient: grid-system of bootstrap
//the 'import' => keyword is used to acquire the components/modules needed.
//we are trying to acquire multiple components inside a single statement, so what we need to do is to wrap the components inside a container.
import { Col, Row } from 'react-bootstrap'; 

//2. Create a function that will describe how the components will look like.
//3. expose the component so that it will become reusable for other modules inside the app. 
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
