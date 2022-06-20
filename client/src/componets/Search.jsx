import React from "react";
import {useDispatch,useSelector} from 'react-redux'
// import Countris from './Countris.jsx'
// import {Link,Route} from 'react-router-dom'
import {getAllSearch} from '../redux/action.js'
function Search() {
    const dispatch=  useDispatch()
   const valueSearch= useSelector(state=> state.valorSearch)
    const handleChange=({target})=>{
      
      dispatch(getAllSearch(target.value)) 
    }
    const   handleSudme=(e)=>{
      e.preventDefault();
     
    }
    
     return(
        <form onSubmit={handleSudme}>
       
           <input
             type="text"
             placeholder="Pais..."
             value={valueSearch}
             onChange={handleChange}
           />
            {/* <button onclick={handleChange}>buscar</button> */}

           {/* <Route path="/countri/search" render={() =><Countris name={countri}/>} /> */}
          </form>
     )
}

export default  Search;