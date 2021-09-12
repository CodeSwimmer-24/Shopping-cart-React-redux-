import { ActionTypes } from "../contants/actions-type"

const initialState = {
    products:[],
}

export const reducer = (state= initialState,{type,payload}) => {
   switch(type){
       case ActionTypes.SET_PRODUCTS:
        //    return state;
        return {...state, products:payload}
           default:
               return state;
   }
};


export const selectedProductReducer = (state={},{type,payload}) => {
  switch(type) {
    case ActionTypes.SELECTED_PRODUCT:
        return{...state,...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return{};
        default:
         return   state;
  }  
}