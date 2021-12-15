import { all, call } from 'redux-saga/effects';

import { getOrdersWatcher } from "./getOrders";


export default function* rootSaga() {
    yield all([
        call(getOrdersWatcher),
    ]);
}