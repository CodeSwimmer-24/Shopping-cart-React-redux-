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
