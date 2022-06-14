import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllCoutris} from '../redux/action'

function Home(){
    const dispatch = useDispatch();
    const countri= useSelector(state=>state.countris)
    useEffect(()=>{ dispatch(getAllCoutris())},[dispatch])
 return(
    <div className="countriss">
         {
             countri&&countri.map(e=>{ 
                return(
                    <div key={e.id}>
                        <p>{e.nombre}</p>
                        <img src={e.imagen} alt={e.nombre}/>
                    </div>
                )
             })
         }
    </div>
 )

}
export default Home;