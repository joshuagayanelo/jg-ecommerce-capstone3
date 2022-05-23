//This page will be use to showcase all the available courses stored in our collection in MOngoDB.

//1. Identify the needed components for this page.
import {Fragment, useEffect, useState} from 'react'
import AdminCard from '../components/AdminCard';
import { Container, Row, Button } from 'react-bootstrap';

// import coursesData from '../data/coursesData';
// import productsData from '../data/productsData';

    //the comtainer component from bootstrap will be used to add margin around the components inside the page.
//2. Create a function that will describe the anatomy of the page.


export default function Products(){

    const [products, setProducts] = useState([])

    useEffect(() => {
    	fetch('http://localhost:4000/api/products/inventory', {
    	    headers: {
    	        'Content-Type': 'application/json',
    	        Authorization: `Bearer ${localStorage.getItem('token')}`
    	    }
    	})
        .then(res => res.json())
        .then(data => {
            
            console.log(data)
            setProducts(data.map(products => {
                return(
                     <AdminCard key={products._id} productProp={products} />
                    )
            }))

        })
    }, [])


    return (
        <div className="pb-5">
            <Container>

                <h1 className='text-center mt-3 mb-3'>Admin Dashboard</h1>
   				 <Container className="text-center">
	                <Button variant ="success" className="mr-1 mb-3">Add new product</Button>
	               {/* <Button variant ="danger" className="mr-1 mb-3">Deactivate</Button>*/}
             	 </Container>
                {products}  

            </Container>
        </div>
    );
};

