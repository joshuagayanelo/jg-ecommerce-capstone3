//This page will be use to showcase all the available courses stored in our collection in MOngoDB.

//1. Identify the needed components for this page.
import {Fragment, useEffect, useState} from 'react'
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
// import { Grid, GridItem } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'


// import coursesData from '../data/coursesData';
// import productsData from '../data/productsData';

    //the comtainer component from bootstrap will be used to add margin around the components inside the page.
//2. Create a function that will describe the anatomy of the page.
// const bannerCourse = {
//     title: 'You one stop shop for mugs.',
//     content: 'Mugs is life.'
// }

export default function Products(){

    // console.log(productsData[0])
    
    // const courses = productsData.map(course => {
        
    //     return(
    //         <CourseCard key={course.id} courseProp={course} />
    //     ) 

    // });

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/api/products')
        .then(res => res.json())
        .then(data => {
            
            console.log(data)
            setProducts(data.map(products => {
                return(
                     <ProductCard key={products._id} productProp={products} />
                    )
            }))

        })
    }, [])

    return (
        <Container fluid>
            <Row className="pb-5 mb-5">
                <Col xs={12} className="pt-3 mb-2 text-center" >
                    <h1 className=' mt-3 mb-3'
                    style={{
                        fontSize:'2rem'
                    }}>
                    Mga Produkto
                    </h1>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col className="mb-5">
{/*                    <Grid
                        templateColumns='repeat(4, 1fr)' 
                        gap={0}>
                    {products}  
                    </Grid>*/}
                    <SimpleGrid 
                    columns={[1, null, 3]} 
                    >
                    {products}  
                    </SimpleGrid>
                </Col>
            </Row>

        </Container>
    );
};

