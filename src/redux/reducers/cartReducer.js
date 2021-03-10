import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action)//State:Sepet'i tutuyor
{
    switch (action.type) {

        case actionTypes.ADD_TO_CART:
            var addedItem = state.find(c => c.product.id === action.payload.product.id)//Eklemek istedigim urun sepette var mi diye kontrol ediyorum
            if (addedItem) {
                //Bu durumda yeni bir state listesi olusturuyorum
                var newState = state.map(cartItem => {
                    if (cartItem.product.id === action.payload.product.id) {
                        return Object.assign({}, addedItem, { quantity: addedItem.quantity + 1 });
                    }
                    return cartItem;
                })
                return newState;
            }
            else {
                //state'in bir kopyasini al ve action'la gelen payload'i ona ekle,yani sepete urunu ekle
                return [...state, { ...action.payload }]
            }

        // Sepetten silme
        case actionTypes.REMOVE_FROM_CART:
            // Silinmesini istedigimiz urun haric tum urunleri filtreleyip yeni bir state olusturuyoruz
            var newState = state.filter(cartItem =>
                cartItem.product.id !== action.payload.id)
            return newState;

        default:
            return state;
    }
}