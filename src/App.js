import './App.css';
import { useState } from 'react';
import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Courses from './pages/Courses';
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
    email: localStorage.getItem('email')
  })

  //Function for clearing the localStorage on logout.
  const unsetUser = () => {
    localStorage.clear()
  }



  return (
    <UserProvider value = {{user, setUser, unsetUser}}>
      <Router>
         <AppNavBar />
         <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/Login' element={<Login />} />
           <Route path='/Register' element={<Register />} />
           <Route path='/Courses' element={<Courses />} />
           <Route path='/Logout' element={<Logout />} />
           <Route path='*' element={<ErrorPage />} />
         </Routes>
         <Footer />
      </Router>
    </UserProvider>
    );
};
