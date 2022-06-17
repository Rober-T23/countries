import React, { useState } from "react";
import {Link,Route} from 'react-router-dom'
import Home from './Home.jsx'
function Search() {
    const [countri, setCountri] = useState("");
    const handleClick=({target})=>{
      setCountri(target.value)
    }
    const handleSudme=(e)=>{
      e.preventDefault();
     
    }
   
     return(
        <form onSubmit={handleSudme}>
            <input
              type="text"
              placeholder="Pais..."
              value={countri}
              onChange={handleClick}
            />

            <Route path="/countri"><Home nombre={countri}/></Route>
          </form>
     )
}

export default  Search;