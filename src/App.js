import './App.css';

import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Courses from './pages/Courses';
import ErrorPage from './pages/Error'


export default function App() {
  return (
      <div>
         <AppNavBar />
         <Home />
         <Login />
         <Register />
         <Courses />
         <ErrorPage />
     </div>
    );
}
