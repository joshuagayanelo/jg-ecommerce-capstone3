import logo from './logo.svg';
import './App.css';

// remove the template in the module

// asdf

//Save an image of your favorite cartoon character inside the public folder.  

// NEW SKILL: Identify how to access resources and elements from the public folder/library of th eproject.

// PUBLIC -> To store all documents and modules that are shared accross all components of the app that are visible to all.

// To acquire the image you want to display you may want to get from the public folder first. IMport the element 

import cartoon from './tom-and-jerry2.jpg';
    // pass down the alias that identifies the resource into our element.

function App() {
  return (
  <div>
    <h1>Welcome to the course booking batch 164</h1>
    <h5>This is our project in React</h5>
    <h6>Come visit our website.</h6>
    <img src={cartoon} alt="image not found" />
    <h3>This is my favorite Cartoon Character.</h3>
    <img src="/image/tom-and-jerry2.jpg"/>;

  </div>
  );
}

export default App;
