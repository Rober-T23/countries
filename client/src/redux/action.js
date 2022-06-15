import axios from 'axios';
export const DELETE_COUNTRES = 'DELETE_COUNTRES';
export const GET_COUNTRIS = 'GET_COUNTRIS'
export const GET_NAMECOUNTRI ='GET_NAMECOUNTRI'
export const SET_CURRENPAGE ='SET_CURRENPAGE'

export function getAllCoutris() {
  return (dispatch) => {
    return axios('http://localhost:3100/countries/').then(res =>
      dispatch({ type: 'GET_COUNTRIS', payload: res.data })
    );
  };
}

export function getNameCountris(nombre){
  return(dispatch)=>{
    return axios(`http://localhost:3100/countries/nombre/${nombre}`).then(res =>
    dispatch({type: 'GET_NAMECOUNTRI',payload: res.data}))
  }
}
export function setCurrentPage(numero){
  return(dispatch)=>dispatch({
    type: SET_CURRENPAGE,
    payload: numero
  })
}