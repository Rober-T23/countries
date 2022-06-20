import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllCoutris} from '../redux/action'
import  Paginado from './Paginado'
import NoCountris from './NoCountris'
import {Link} from 'react-router-dom'

function Countris(){
    const dispatch = useDispatch();
    const countri= useSelector(state=>state.countris)
    const valueSearch= useSelector(state=> state.valorSearch)
    const currenPage= useSelector(state=>state.coutriPage)
    useEffect(()=>{ dispatch(getAllCoutris())},[dispatch])
    console.log(valueSearch)
    let filtroCountri=[]
    let tamañoPage=countri.length
    if(valueSearch!==""){
        filtroCountri=countri.filter(e=>e.nombre.includes( valueSearch))
        tamañoPage=filtroCountri.length
    }
    const coutriPorPage=10;
    const ultimoInidice= currenPage*coutriPorPage;
    const primerIndice= ultimoInidice-coutriPorPage;
    let  currentCountris=[]
    if(filtroCountri.length){
        currentCountris= filtroCountri.slice(primerIndice,ultimoInidice)
    }else{
        currentCountris=countri.slice(primerIndice,ultimoInidice)
    }
    

    
  if(valueSearch){

    if(filtroCountri.length>0){
        return(
            
            <div className="countris">
            <Paginado coutriPorPage={coutriPorPage} totalCountri={tamañoPage} />
             {
    
             currentCountris&& currentCountris.map(e=>{ 
                    return(
                        <div key={e.id}>
                          <p>{e.nombre}</p> 
                            <img src={e.imagen} alt={e.nombre}/>
                           <Link to={`/Countri/${e.id}`}> <button>detalles</button></Link>
                        </div>
                    )
                 })
             }
        </div>
        )
    }else{
        return(
            <NoCountris/>
        )
    }
   
  }else{
    return(
        <div className="countris">
            <Paginado coutriPorPage={coutriPorPage} totalCountri={tamañoPage} />
             {
    
             currentCountris&& currentCountris.map(e=>{ 
                    return(
                        <div key={e.id}>
                          <p>{e.nombre}</p> 
                            <img src={e.imagen} alt={e.nombre}/>
                           <Link to={`/Countri/${e.id}`}> <button>detalles</button></Link>
                        </div>
                    )
                 })
             }
        </div>
     )
  }

}

 export default Countris;
//             console.log(name)
//             const dispatch = useDispatch();
//             const countri= useSelector(state=>state.countris)
//             const currenPage= useSelector(state=>state.coutriPage)
//             useEffect(()=>{ dispatch(getAllCoutris())},[dispatch])
//             const coutriPorPage=10;
//             const ultimoInidice= currenPage*coutriPorPage;
//             const primerIndice= ultimoInidice-coutriPorPage;
//             const currentCountris=countri.slice(primerIndice,ultimoInidice)
           
//             const countriSearch= countri.filter(e=> e.nombre.includes(name))
         
           
//         if(!name){
//             return(
//                 <div className="countris">
//                     <Paginado coutriPorPage={coutriPorPage} totalCountri={countri.length} />
//                      {
            
//                      currentCountris&& currentCountris.map(e=>{ 
//                             return(
//                                 <div key={e.id}>
//                                   <p>{e.nombre}</p> 
//                                     <img src={e.imagen} alt={e.nombre}/>
//                                    <Link to={`/Countri/${e.id}`}> <button>detalles</button></Link>
//                                 </div>
//                             )
//                          })
//                      }
//                 </div>
//              )
//         }else{
//            if(countriSearch.length>0){
//              return(
//                 <div className="countris">
//                     <Paginado coutriPorPage={coutriPorPage} totalCountri={countriSearch.length} />
//                     {
//                         countriSearch && countriSearch.map(e => {
//                             return (
//                                 <div key={e.id}>
//                                     <p>{e.nombre}</p>
//                                     <img src={e.imagen} alt={e.nombre} />
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>
//             )
//            }else{
//             console.log("no hay datos")
//             return(
//                 <NoCountris/>
//             )
//            }
        
//         }

// import Countris from './Countris.jsx'
// import {Router,link} from 'react-router-dom' 
// function Home(){
//    return(
//     <div>
//            <Router  path='/'
//                render={() =><Countris/>}>
//            </Router>
//            <Router  path='/'
//                render={() =><Countris/>}>
//            </Router>


//     </div>
//    )

// }
// export default Home;
