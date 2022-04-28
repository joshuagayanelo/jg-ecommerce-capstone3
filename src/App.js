import './App.css';

import Banner from './components/Banner';
import AppNavBar from './components/AppNavBar';
import Highlights from './components/Highlights';
import CourseCard from './components/CourseCard';

export default function App() {
  return (
      <div>
         <AppNavBar/>
         <CourseCard/>
         <Highlights/>  
         <Banner/> 
     </div>
    );
}
