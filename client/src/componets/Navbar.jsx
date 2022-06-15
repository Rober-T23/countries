import Search from "./Search"
import "../css/Navbar.css"
function Navbar(){
  return(
    <div className="navbar">
       <div><Search/></div>
        <div>
        <select name="select">
           <option value="value1">Todos Pais</option>
           <option value="value2" >Continente</option>
       </select>
       <label htmlFor="">A-Z</label>
        <input type="radio"name="order" value="A-Z"  placeholder="radio"/>
       
        <input type="radio"name="order" value="Z-A" placeholder="radio"></input>
        <label htmlFor="">Z-A</label>
        </div>
    </div>
  )
}
export default Navbar;