//This page will be use to showcase all the available courses stored in our collection in MOngoDB.

//1. Identify the needed components for this page.
import {Fragment, useEffect, useState, useContext} from 'react'
import CartCard from '../components/CartCard';
import { Container, Button } from 'react-bootstrap';
import UserContext from '../UserContext';


// import coursesData from '../data/coursesData';
// import productsData from '../data/productsData';

    //the comtainer component from bootstrap will be used to add margin around the components inside the page.
//2. Create a function that will describe the anatomy of the page.
// const bannerCourse = {
//     title: 'You one stop shop for mugs.',
//     content: 'Mugs is life.'
// }

export default function Cart (){

    // console.log(productsData[0])
    
    // const courses = productsData.map(course => {
        
    //     return(
    //         <CourseCard key={course.id} courseProp={course} />
    //     ) 

    // });

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
                {/*<Banner bannerData={bannerCourse} />*/}
                {cart} 
                
            </Container>
        </div>
    );
};

