import {Fragment, useEffect, useState} from 'react'
import AdminCard from '../components/AdminCard';
import { Container, Row, Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Navigate, useNavigate } from 'react-router-dom';
//import UserContext from '../UserContext'

// import coursesData from '../data/coursesData';
// import productsData from '../data/productsData';

    //the comtainer component from bootstrap will be used to add margin around the components inside the page.
//2. Create a function that will describe the anatomy of the page.


export default function Products(){

   //const {user, setUser} = useContext(UserContext);

   //const navigate = useNavigate()

    const [products, setProducts] = useState([])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [productName, setProductName] = useState("");
    const [productSku, setProductSku] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    const [isActive, setIsActive] = useState(false);

        
    const addProduct = (e) => {
        
        e.preventDefault();

        fetch('https://capstone2-joshuagayanelo.herokuapp.com/api/products/new', {
            method:"POST", 
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }, 
            body: JSON. stringify({
                productName: productName, 
                productSku: productSku, 
                description: description, 
                price: price, 
                quantity: quantity, 
            })
        })
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            if(data === true){

                setProductName("");
                setProductSku("");
                setDescription("");
                setPrice("");
                setQuantity("");


                Swal.fire({
                    title: "Successfully added",
                    icon: "success", 
                    text: "You have successfully added a product."
                
                })

                window.setTimeout(() => {location.reload()},2000)

            } else {
                Swal.fire({
                    title: "Something went wrong.",
                    icon: "error", 
                    text: "Please try again."
                })
            }
        })

    }

    useEffect(() => {
        fetch('https://capstone2-joshuagayanelo.herokuapp.com/api/products/inventory', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            
            //console.log(data)
            setProducts(data.map(products => {
                return(
                     <AdminCard key={products._id} productProp={products} />
                    )
            }))

        })
    }, [])


    useEffect(() => {
      if((
         productName   !== "" && 
         productSku    !== "" && 
         description       !== "" &&   
         price   !== "" && 
         quantity   !== ""
         )){
         setIsActive(true)
      } else {
         setIsActive(false)
      }
    }, [productName, productSku, description, price, quantity])

    return (
        <div className="pb-5">
            <Container>

                <h1 className='text-center mt-3 mb-3'>Admin Dashboard</h1>
                 <Container className="text-center">
                    <Button variant ="success" className="mr-1 mb-3"  onClick={handleShow}>Add new product</Button>

                    {/*ADD PRODUCT MODAL*/}
                    <Modal show={show} onHide={handleClose}>

                        <Form onSubmit={(e) => addProduct(e)}>

                            <Modal.Header closeButton>
                              <Modal.Title>Add new product</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                              <Form >

                                <Form.Group className="mb-3" controlId="productName">
                                  <Form.Label>Product Name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter product name"
                                    autoFocus
                                    value={productName}
                                    onChange={e => {setProductName(e.target.value)}}
                                  />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="productSku">
                                  <Form.Label>SKU Name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter product SKU"
                                    autoFocus
                                    value={productSku}
                                    onChange={e => {setProductSku(e.target.value)}}
                                  />
                                </Form.Group>
         
                                <Form.Group
                                  className="mb-3"
                                  controlId="description">
                                  <Form.Label>Description</Form.Label>
                                  <Form.Control 
                                  as="textarea"
                                  type="text" 
                                  rows={3} 
                                  value={description}
                                  onChange={e => {setDescription(e.target.value)}}
                                  />
                                </Form.Group>      

                                <Form.Group className="mb-3" controlId="price">
                                  <Form.Label>Price</Form.Label>
                                  <Form.Control
                                    type="number"
                                    placeholder="Enter product price"
                                    autoFocus
                                    value={price}
                                    onChange={e => {setPrice(e.target.value)}}
                                  />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="quantity">
                                  <Form.Label>Quantity</Form.Label>
                                  <Form.Control
                                    type="number"
                                    placeholder="Enter product quantity"
                                    autoFocus
                                    value={quantity}
                                    onChange={e => {setQuantity(e.target.value)}}
                                  />
                                </Form.Group>
         
                              </Form>

                            </Modal.Body>

                            <Modal.Footer>
                              <Button variant="secondary" onClick={handleClose}>
                                Cancel
                              </Button>
                              {
                                 isActive ?  
                                 <Button 
                                 variant="primary" 
                                 type="submit" 
                                 id="submitBtn"                              
                                  onClick={handleClose} 

                                 >
                                   Add Product
                                 </Button>
                                 : 
                                 <Button 
                                 variant="primary" 
                                 type="submit" 
                                 id="submitBtn"
                                 disabled
                                  onClick={handleClose} 
                                 >
                                   Add Product
                                 </Button>
                              }

                            </Modal.Footer>

                          </Form>
                   
                        </Modal>
                 </Container>
                {products}  

            </Container>
        </div>
    );
};
