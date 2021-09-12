import { combineReducers } from "redux";
import {reducer,selectedProductReducer} from "./reducer";

const reducers = combineReducers({
    allProducts: reducer,
    product:selectedProductReducer,
});

export default reducers;
