import {GET_ORDERS_SUCCESS, GET_ORDERS_ERROR, GET_ORDERS_REQUEST} from "../constants";

export const getOrdersRequest = () => ({type: GET_ORDERS_REQUEST});
export const getOrdersSuccess = (data: any) => ({type: GET_ORDERS_SUCCESS, payload: data});
export const getOrdersError = () => ({type: GET_ORDERS_ERROR});