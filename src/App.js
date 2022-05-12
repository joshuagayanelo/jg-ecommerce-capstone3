import './App.css';
import { useState, useEffect } from 'react';
import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Courses from './pages/Courses';
import CourseView from './pages/CourseView'
import ErrorPage from './pages/Error';
import Logout from './pages/Logout';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';

export default function App() {

  //React Contect is nothing but a global stat to the app. It is a way to make a particular data available to all the compoonents no matter how they are nested.

  // State hook for the user state the defined here for a global scope
  // Initialized as an object with properties from the local storage
  // This will be used to store the user information and wil be used for validating if a user is logged in on the app or not
  const [user, setUser] = useState({
    id: null, 
    isAdmin: null
  })

  //Function for clearing the localStorage on logout.
  const unsetUser = () => {
    localStorage.clear()
  }

  // useEffect(() => {
  //   console.log(user)
  // }, [user])

  useEffect(() => {

    fetch('http://localhost:4000/api/users/details', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => res.json())
    .then(data =>{
      if(typeof data._id !== "undefined") {
        setUser({
          id: data._id,
          isAdmin: data.isAdmin
        })
      } else {
        setUser({
          id: null,
          isAdmin: null
        })
      }
    })

  },[])


  return (
    <UserProvider value = {{user, setUser, unsetUser}}>
      <Router>
         <AppNavBar />
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/login' element={<Login />} />
           <Route path='/register' element={<Register />} />
           <Route path='/courses' element={<Courses />} />
           <Route path='/courses/:courseId' element={<CourseView />} />
           <Route path='/logout' element={<Logout />} />
           <Route path='*' element={<ErrorPage />} />
         </Routes>
         <Footer />
      </Router>
    </UserProvider>
    );
};
