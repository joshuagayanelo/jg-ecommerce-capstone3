import './App.css';

import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';


export default function App() {
  return (
      <div>
         <AppNavBar/>
         <Home/>
         <Login/>
         <Register/>
     </div>
    );
}
