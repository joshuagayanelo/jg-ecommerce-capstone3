import './App.css';

import AppNavBar from './components/AppNavBar';
// import Banner from './components/Banner';
// import Highlights from './components/Highlights';
// import CourseCard from './components/CourseCard';


import Home from './pages/Home';

export default function App() {
  return (
      <div>
         <AppNavBar/>
         <Home/>
     </div>
    );
}
