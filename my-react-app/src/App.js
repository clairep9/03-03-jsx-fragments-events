import logo from './logo.svg';
import './App.css';

function App() {
  const buttonClick = () => {
    alert('You clicked the button.')
  }


  return (
    <>
    <h1>Welcome to React</h1>
    <p>My name is Claire. I like cake. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    <button onClick={buttonClick}>Click Me</button>
    </>
   
    
  );
}

export default App;
