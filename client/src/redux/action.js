import axios from 'axios';
export const DELETE_COUNTRES = 'DELETE_COUNTRES';
export const GET_COUNTRIS = 'GET_COUNTRIS'
export const GET_NAMECOUNTRI ='GET_NAMECOUNTRI'
export const SET_CURRENPAGE ='SET_CURRENPAGE'
export const GET_SEARCH = 'GET_SEARCH'
export function getAllCoutris() {
  return (dispatch) => {
    return axios('http://localhost:3100/countries/').then(res =>
      dispatch({ type: 'GET_COUNTRIS', payload: res.data })
    );
  };
}
export function getAllSearch(inputValue){

  return(dispatch)=>
    dispatch({
      type: GET_SEARCH,
      payload: inputValue
    })
  
  
}

export function setCurrentPage(numero){
  return(dispatch)=>dispatch({
    type: SET_CURRENPAGE,
    payload: numero
  })
}