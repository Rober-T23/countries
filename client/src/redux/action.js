import axios from 'axios';
export const DELETE_COUNTRES = 'DELETE_COUNTRES';
export const GET_COUNTRIS = 'GET_COUNTRIS'
export function getAllCoutris() {
  return (dispatch) => {
    return axios('http://localhost:3100/countries/').then(res =>
      dispatch({ type: 'GET_COUNTRIS', payload: res.data })
    );
  };
}

export const deletecountres = (id) => {
  return {
    type: DELETE_COUNTRES,
    payload: id,
  };
};
