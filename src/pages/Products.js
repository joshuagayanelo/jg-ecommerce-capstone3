//This page will be use to showcase all the available courses stored in our collection in MOngoDB.

//1. Identify the needed components for this page.
import {Fragment, useEffect, useState} from 'react'
import CourseCard from '../components/CourseCard';
import Banner from '../components/Banner';
import { Container } from 'react-bootstrap';

import coursesData from '../data/coursesData';
import productsData from '../data/productsData';

    //the comtainer component from bootstrap will be used to add margin around the components inside the page.
//2. Create a function that will describe the anatomy of the page.
// const bannerCourse = {
//     title: 'You one stop shop for mugs.',
//     content: 'Mugs is life.'
// }

export default function Courses(){

    console.log(productsData[0])
    
    const courses = productsData.map(course => {
        
        return(
            <CourseCard key={course.id} courseProp={course} />
        ) 

    });

    // const [courses, setCourses] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:4000/api/courses/')
    //     .then(res => res.json())
    //     .then(data => {
            
    //         console.log(data)
    //         setCourses(data.map(course => {
    //             return(
    //                  <CourseCard key={course._id} courseProp={course} />
    //                 )
    //         }))

    //     })
    // }, [])

    return (
        <div className="pb-5">
            <Container>
                <h1 className='text-center mt-3 mb-3'> Products</h1>
                {/*<Banner bannerData={bannerCourse} />*/}
                {courses}  
            </Container>
        </div>
    );
};

