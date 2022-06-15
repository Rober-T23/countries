
import {useDispatch,useSelector} from 'react-redux'
import {setCurrentPage} from '../redux/action'


function Paginado({coutriPorPage,totalCountri}){
    const dispatch = useDispatch();
    const curret= useSelector(state=>state.coutriPage)
    const numerosDePage=[];
    for(let i=1;i<=Math.ceil(totalCountri/coutriPorPage);i++){
        numerosDePage.push(i)
    }
    function handleClick(numero){
        dispatch(setCurrentPage(numero))
    }
    function previous(){
        if(curret>1){
            dispatch(setCurrentPage(curret-1))
        }
    }
    function next(){
        if(curret<numerosDePage.length){
            dispatch(setCurrentPage(curret+1))
        }
    }
 return(
    <div>
        <button  onClick={previous}>{"<<"}</button>
       {

        numerosDePage.map(e=>
            { 
                return(

                   <button key={e} onClick={()=>handleClick(e)}>{e}</button>
                )
             }  
            
        )
       }
        <button onClick={next}>{">>"} </button>
    </div>
 )

}
export default Paginado;





