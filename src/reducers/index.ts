import { AnyAction } from "redux";

import { InitialStateType } from "../interfaces";
import { GET_ORDERS_ERROR, GET_ORDERS_SUCCESS } from "../constants";


const InitialState = {
    orders: [],
    error: false,
};

const reducer = (state: InitialStateType = InitialState, action: AnyAction) => {
    switch (action.type) {
        case GET_ORDERS_SUCCESS:
            return { ...state, orders: action.payload };
        case GET_ORDERS_ERROR:
            return { ...state, error: true };
        default:
            return state;
    }
};

export default reducer;