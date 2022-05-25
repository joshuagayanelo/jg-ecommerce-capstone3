import { Col, Row, Container, Fragment } from 'react-bootstrap'; 
import '../App.css';

export default function Banner({bannerData}) {
	return(
   
       <div className="ml-auto">
			<div className = "p-5 m-3">
			   <p className = "banner-title-content"> {bannerData.content} </p>
			   <h1 className = "banner-title"> {bannerData.title} </h1>
			</div>          
       </div>
      
	);
};
