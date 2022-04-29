//This page will be use to showcase all the available courses stored in our collection in MOngoDB.

//1. Identify the needed components for this page.
import CourseCard from './../components/CourseCard';
import Banner from './../components/Banner';
import { Container } from 'react-bootstrap';

    //the comtainer component from bootstrap will be used to add margin around the components inside the page.
//2. Create a function that will describe the anatomy of the page.
export default function Courses(){
    return (
        <Container>
            <Banner />
            <h1 className='text-center mt-3 mb-3'> Courses Catalog Page </h1>
            <CourseCard/>
        </Container>
    );
};

