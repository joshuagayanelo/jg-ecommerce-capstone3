//This page will be use to showcase all the available courses stored in our collection in MOngoDB.

//1. Identify the needed components for this page.
import {Fragment, useEffect, useState, useContext} from 'react'
import CartCard from '../components/CartCard';
import Checkout from '../components/Checkout';
import { Container, Row, Col } from 'react-bootstrap';
import UserContext from '../UserContext';
import React from 'react';


import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export default function Cart () {

    const [cart, setCart] = useState([])
    const {user} = useContext(UserContext);
   
   //console.log(setCart)

    useEffect(() => {
        fetch('https://capstone2-joshuagayanelo.herokuapp.com/api/cart/my-cart/', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {

            // let total = 0;
            // setCart(data.forEach(cart => {
            //     total += cart.subTotal;
                    
            // }))
           // console.log(total)

            //console.log(data)
            setCart(data.map(cart => {
                return(
                     <CartCard key={data._id} cartProp={cart} />
                    )      
                
            }))


        })
    }, [])

    return (

        <Container fluid>
            <Row className ="pl-5 mb-3 text-center" 
            style={{
                height:"100px", 
                marginTop:"10px", 
                //background:"blue"
            }}>
                <Col>
                    <h1 className='mt-3 mb-3'
                    style={{
                        fontSize:'2rem'
                    }}>
                    Cart
                    </h1>
                </Col>
            </Row>

            <Row>
              <Col xs={12} md={6} lg={6} style={{height:"70%", paddingBottom:"10%", paddingLeft:"5%"}}>{cart}</Col>
              <Col xs={12} md={6} lg={6} 
              style={{
                paddingBottom:"50%",
                paddingLeft:"5%"
              }}>

                <Checkout />


              </Col>
            </Row>
        </Container>

    );
};

