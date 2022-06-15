import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getAllCoutris} from '../redux/action'
import  Paginado from './Paginado'

function Home(){
    const dispatch = useDispatch();

    const countri= useSelector(state=>state.countris)
    const currenPage= useSelector(state=>state.coutriPage)
    useEffect(()=>{ dispatch(getAllCoutris())},[dispatch])
    const coutriPorPage=10;
    const ultimoInidice= currenPage*coutriPorPage;
    const primerIndice= ultimoInidice-coutriPorPage;
    const currentCountris=countri.slice(primerIndice,ultimoInidice)
    console.log(currentCountris)
    console.log(ultimoInidice,"   ",primerIndice)
    console.log(currenPage)
    
 return(
    <div className="countris">
        <Paginado coutriPorPage={coutriPorPage} totalCountri={countri.length} />
         {

         currentCountris&& currentCountris.map(e=>{ 
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
