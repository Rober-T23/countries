//const action = require("./action.js");

import { DELETE_COUNTRES , GET_COUNTRIS, SET_CURRENPAGE,GET_SEARCH} from './action';

const iniciaState = {
  countris: [],
  tourist: [],
  valorSearch:'',
  coutriPage: 1
};
function reducer(state = iniciaState, action) {
  switch (action.type) {
    case  GET_COUNTRIS:
      return{
        ...state,
        countris: action.payload
      }
    case SET_CURRENPAGE:
      return{
        ...state,
        coutriPage: action.payload
      }
    case GET_SEARCH:
      return{
        ...state,
        valorSearch:action.payload
      }
    case DELETE_COUNTRES:
      return {
        ...state,
        products: state.products.filter(
          (producto) => producto.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
export default reducer;
