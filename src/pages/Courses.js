//This page will be use to showcase all the available courses stored in our collection in MOngoDB.

//1. Identify the needed components for this page.
import {Fragment, useEffect, useState} from 'react'
import CourseCard from '../components/CourseCard';
import Banner from '../components/Banner';
import { Container } from 'react-bootstrap';
// import coursesData from '../data/coursesData';

    //the comtainer component from bootstrap will be used to add margin around the components inside the page.
//2. Create a function that will describe the anatomy of the page.
const bannerCourse = {
    title: 'Welcome to The Courses Catalog',
    content: 'Browse and Enroll to our Wide Array of Courses.'
}

export default function Courses(){

    // console.log(coursesData[0])
    
    // const courses = coursesData.map(course => {
        
    //     return(
    //         <CourseCard key={course.id} courseProp={course} />
    //     ) 

    // });

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/api/courses/')
        .then(res => res.json())
        .then(data => {
            
            console.log(data)
            setCourses(data.map(course => {
                return(
                     <CourseCard key={course._id} courseProp={course} />
                    )
            }))

        })
    }, [])

    return (
        <Container>
            <Banner bannerData={bannerCourse} />
            <h1 className='text-center mt-3 mb-3'> Courses Catalog Page </h1>
            {courses}
        </Container>
    );
};

