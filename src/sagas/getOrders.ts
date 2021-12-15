import { takeEvery, call, put } from 'redux-saga/effects';

import { GET_ORDERS_REQUEST } from "../constants";
import { getOrdersError, getOrdersSuccess } from "../actions";

function* getOrders() {
    try {
        const result: Promise<any> = yield call(fetchOrders);
        yield put(getOrdersSuccess(result));
    } catch {
        yield put(getOrdersError());
    }
}

const fetchOrders = () => fetch('https://u38027.netangels.ru/api/orders.php').then(r => r.json());

export function* getOrdersWatcher() {
    yield takeEvery(GET_ORDERS_REQUEST, getOrders);
}