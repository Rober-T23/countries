import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllCoutris} from '../redux/action'

function Countri(){
   //  const dispatch = useDispatch();
   //    const countri= useSelector(state=>state.countris)
   // useEffect(()=>{ dispatch(getAllCoutris())},[dispatch])
   // const countriData= countri.filter(e=> e.nombre.includes(nombre))

   // if(countriData){
   //    return (
   //       <div className="countris">
   //          {
   //             countriData && countriData.map(e =>{
   //                return(
   //                   <div key={countriData.id}>
   //                      <p>{countriData.nombre}</p>
   //                      <img src={countriData.imagen} alt={countriData.nombre} />
   
   //                   </div>
   //                )
   //             }
                        
   //             )
   
   
   //          }
   //       </div>
   //    )
   // }else{
   //    return(
   //       <div>NO HAY DATA</div>
   //    )
   // }

}
export default Countri;