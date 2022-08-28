
import './App.css';
import CalcForm from './CalcForm.js';
import Navbar from './Navbar.js';
function App() {
  return (
    <>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
    <Navbar title="Calculator" details="a simple calculator, to make your calculations faster and rest your brain."/>
    <CalcForm/>
    </>
    
  );
}

export default App;
