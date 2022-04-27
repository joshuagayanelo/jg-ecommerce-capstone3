import './App.css';
//get the component that you want to display in the browser by specifying the location and the file you want to retrieve and use.
import Banner from './components/Banner';

//Create a JSX element for the variable that describes the component.

//refactor the template to have a much conside script. 
//export default -> this keyword is used to 'expose' the component/function across all modules in the application. 
export default function App() {
  return (
      <div>
         <Banner />    
     </div>
    );
}
