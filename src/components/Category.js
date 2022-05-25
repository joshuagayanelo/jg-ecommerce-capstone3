import { Col, Row, Container, Fragment } from 'react-bootstrap'; 
import '../App.css';

export default function Category({categoryData}) {
	return(
   
       <div className="ml-auto">
			<div className = "p-5 m-3">
			   <h1 className="category-title"> {categoryData.title} </h1>
			   <h1 className="category-title2"> {categoryData.title2} </h1>
			   <p className = "category-title-content1"> {categoryData.content1} </p>
			   <p className = "category-title-content2"> {categoryData.content2} </p>
			</div>          
       </div>
      
	);
};
