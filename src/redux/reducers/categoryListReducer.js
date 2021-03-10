import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

// Reducer bir state tutucudur gelen aksiyona gore ,o aksiyonun state'ini dondurur
export default function categoryListReducer(state=initialState.categories,action){

    switch (action.type) {

        case actionTypes.GET_CATEGORIES_SUCCESS:
            
           return action.payload;//Aslinda state'i donduruyor
    
        default:
            return state;
    }
}