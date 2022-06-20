import Search from "./Search"
import "../css/Navbar.css"
function Navbar(){
  return(
    <div className="navbar"> 
        <select name="select">
           <option value="value1">Todos Pais</option>
           <option value="value2" >America</option>
           <option value="value3" >Asia</option>
           <option value="value4" >Africa</option>
           <option value="value5" >Europa</option>
       </select>
       <label htmlFor="">A-Z</label>
        <input type="radio"name="order" value="A-Z"  placeholder="radio"/>
       
        <input type="radio"name="order" value="Z-A" placeholder="radio"></input>
        <label htmlFor="">Z-A</label>
        <div><Search/></div>
       
    </div>
  )
}
export default Navbar;