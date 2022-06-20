import {useParams}from 'react-router-dom'
import {useSelector}from 'react-redux'
function Countri(){
    let countris = useSelector(state=>state.countris)
    let {id}=useParams()
    let dataResuls= countris.filter(e=>e.id===id)
    return(
        <div className="countri">
           {
             dataResuls&& dataResuls.map(e => {
                return (
                    <div key={e.id}>
                        
                        <img src={e.imagen} alt={e.nombre}/>
                        <h1>{e.name}</h1>
                        <p>{e.id}</p>
                        <h2>{e.continente}</h2>
                        <p>{e.capital}</p>
                        <p>{e.poblacion}</p>
                        <p>{e.subregion}</p>
                        <p>{e.area}</p>


                    </div>
                )
             })
           }
        </div>
    )
}
export default Countri;