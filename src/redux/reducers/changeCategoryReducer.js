import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

// Reducer bir state tutucudur gelen aksiyona gore ,o aksiyonun state'ini dondurur
export default function changeCategoryReducer(state=initialState.currentCategory,action){

    switch (action.type) {

        case actionTypes.CHANGE_CATEGORY:
            
           return action.payload;//Aslinda state'i donduruyor
    
        default:
            return state;
    }
}