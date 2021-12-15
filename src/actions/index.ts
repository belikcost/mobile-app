import { GET_ORDERS_SUCCESS, GET_ORDERS_ERROR, GET_ORDERS_REQUEST } from "../constants";


const getOrdersRequest = () => ({ type: GET_ORDERS_REQUEST });
const getOrdersSuccess = (data: any) => ({ type: GET_ORDERS_SUCCESS, payload: data });
const getOrdersError = () => ({ type: GET_ORDERS_ERROR });

export { getOrdersError, getOrdersRequest, getOrdersSuccess }