import './App.css';
import {Route} from 'react-router-dom'
import Countris from './componets/Countris.jsx'
import Countri from './componets/Countri.jsx'
import Navbar from './componets/Navbar';
function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
          <Navbar/>
          <Route path="/" exact><Countris/></Route>
          <Route path="/Countri/:id"><Countri/></Route>
         
    </div>
  );
}

export default App;
