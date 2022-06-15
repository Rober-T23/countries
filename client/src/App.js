import './App.css';
import {Route} from 'react-router-dom'
import Home from './componets/Home.jsx'
import Countri from './componets/Countri.jsx'
import Navbar from './componets/Navbar';
function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
          <Navbar/>
  <Home/>
          
   
    </div>
  );
}

export default App;
