import { Col, Row, Container, Fragment } from 'react-bootstrap'; 
import '../App.css';

export default function Banner({bannerData}) {
	return(
   
       <div className="banner-home ml-auto">
			<Col className = "p-5 m-3">
			   <h1 className = "brand-name-banner"> {bannerData.title} </h1>
			   <p className = "my-4"> {bannerData.content} </p>
			</Col>          
       </div>
      
	);
};
