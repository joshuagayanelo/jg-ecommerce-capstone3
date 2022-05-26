//This page will be use to showcase all the available courses stored in our collection in MOngoDB.

//1. Identify the needed components for this page.
import {Fragment, useEffect, useState, useContext} from 'react'
import CartCard from '../components/CartCard';
import { Container, Button } from 'react-bootstrap';
import UserContext from '../UserContext';

export default function Cart (){

    const [cart, setCart] = useState([])
  
    const {user} = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/api/cart/my-cart/', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            
            console.log(data)
            setCart(data.map(cart => {
                return(
                     <CartCard key={data._id} cartProp={cart} />
                    )
            }))
            

        })
    }, [])

    return (
        <div className="pb-5">
            <Container>
                <h1 className=' mt-3 mb-3'>My Cart</h1>
                {cart} 
            </Container>
        </div>
    );
};

