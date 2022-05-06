import './App.css';

import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Courses from './pages/Courses';
import ErrorPage from './pages/Error';
import Logout from './pages/Logout';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
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
    );
}
