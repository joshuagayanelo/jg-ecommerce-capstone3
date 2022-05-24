//This page will be use to showcase all the available courses stored in our collection in MOngoDB.

//1. Identify the needed components for this page.
import {Fragment, useEffect, useState} from 'react'
import AdminCard from '../components/AdminCard';
import { Container, Row, Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

// import coursesData from '../data/coursesData';
// import productsData from '../data/productsData';

    //the comtainer component from bootstrap will be used to add margin around the components inside the page.
//2. Create a function that will describe the anatomy of the page.


export default function Products(){

    const [products, setProducts] = useState([])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [productName, setProductName] = userState("")
    // const [productSku, setProductSku] = userState("")
    // const [description, setDescription] = userState("")
    // const [price, setPrice] = userState(0)
    // const [quantity, setQuantity] = userState(0)

        
    // const addProduct = (e) => {
        
    //     e.preventDefault();
    //     fetch('http://localhost:4000/api/products/new', {
    //         method:"POST", 
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }, 
    //         body: JSON. stringify({
    //             productName: productName, 
    //             productSku: productSku, 
    //             description: description, 
    //             price: price, 
    //             quantity: quantity, 
    //         })
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data === true){

    //             setProductName("");
    //             setProductSku("");
    //             setDescription("");
    //             setPrice("");
    //             setQuantity("");


    //             Swal.fire({
    //                 title: "Successfully added",
    //                 icon: "success", 
    //                 text: "The product has been successfully added in the database."
    //             })

    //         } else {
    //             Swal.fire({
    //                 title: "Something went wrong.",
    //                 icon: "error", 
    //                 text: "Please try adding a product again."
    //             })
    //         }
    //     })

    // }



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
	                <Button variant ="success" className="mr-1 mb-3"  onClick={handleShow}>Add new product</Button>

                    {/*ADD PRODUCT MODAL*/}
                    <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                              <Modal.Title>Add new product</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                              <Form>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                  <Form.Label>Product Name</Form.Label>
                                  <Form.Control
                                    type="email"
                                    placeholder="Enter product name"
                                    autoFocus
                                  />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                  <Form.Label>SKU Name</Form.Label>
                                  <Form.Control
                                    type="email"
                                    placeholder="Enter product SKU"
                                    autoFocus
                                  />
                                </Form.Group>
         

                             <Form.Group
                               className="mb-3"
                               controlId="exampleForm.ControlTextarea1"
                             >
                               <Form.Label>Description</Form.Label>
                               <Form.Control as="textarea" rows={3} />
                             </Form.Group>
         

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                  <Form.Label>Price</Form.Label>
                                  <Form.Control
                                    type="email"
                                    placeholder="Enter product price"
                                    autoFocus
                                  />
                                </Form.Group>
         

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                  <Form.Label>Quantity</Form.Label>
                                  <Form.Control
                                    type="email"
                                    placeholder="Enter product quantity"
                                    autoFocus
                                  />
                                </Form.Group>
         
                              </Form>

                            </Modal.Body>
                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Cancel
                              </Button>
                              <Button variant="primary" onClick={handleClose}>
                                Add Product
                              </Button>
                            </Modal.Footer>
                          </Modal>
	               
             	 </Container>
                {products}  

            </Container>
        </div>
    );
};

