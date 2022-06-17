import './App.css';
import {Route} from 'react-router-dom'
import Home from './componets/Home.jsx'

import Navbar from './componets/Navbar';
function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
          <Navbar/>
          <Route path="/home" exact><Home/></Route>
 
   
    </div>
  );
}

export default App;
