//const action = require("./action.js");

import { DELETE_COUNTRES , GET_COUNTRIS} from './action';
const iniciaState = {
  countris: [],
  tourist: [],
};
function reducer(state = iniciaState, action) {
  switch (action.type) {
    case  GET_COUNTRIS:
      return{
        ...state,
        countris: action.payload
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
