import './App.css';
import { useState, useEffect } from 'react';
import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Admin from './pages/Admin';
import AdminLogin from './pages/AdminLogin';
import Cart from './pages/Cart';
import ProductView from './pages/ProductView'
import ErrorPage from './pages/Error';
import Logout from './pages/Logout';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Loader from "./components/Loader";
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react' 



export default function App() {

  const [user, setUser] = useState({
    id: null, 
    isAdmin: null
  })
 
  const unsetUser = () => {
    localStorage.clear()
  }



  useEffect(() => {

    fetch('https://capstone2-joshuagayanelo.herokuapp.com/api/users/details', {
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

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);


return (
<ChakraProvider>
<div>
  {!loaded? (<Loader />) 
  :
    (
      <UserProvider value = {{user, setUser, unsetUser}}>
        <Router>
             <AppNavBar />
           <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/login' element={<Login />} />
             <Route path='/register' element={<Register />} />
             <Route path='/products' element={<Products />} />
             <Route path='/products/:productId' element={<ProductView />} />
             <Route path='/cart' element={<Cart />} />
             <Route path='/logout' element={<Logout />} />
             <Route path='/admin-dashboard' element={<Admin />} />
             <Route path='/admin-login' element={<AdminLogin />} />
             <Route path='*' element={<ErrorPage />} />
           </Routes>
           <Footer />

        </Router>
      </UserProvider>
    )
  } 
</div>
</ChakraProvider>
    );
};
