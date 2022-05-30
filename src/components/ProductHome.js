import { Col, Row, Container, Fragment } from 'react-bootstrap'; 
import '../App.css';

export default function ProductHome({productHomeData}) {
	return(
   
       <div className="ml-auto">
			<div className = "">
			   <h1 className="productHome-title"> {productHomeData.title} </h1>
			   <p className = "productHome-title-content"> {productHomeData.content} </p>
			</div>          
       </div>
      
	);
};
