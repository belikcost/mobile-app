import {takeEvery, call, put, all} from 'redux-saga/effects';
import {GET_ORDERS_REQUEST} from "../constants";
import {getOrdersError, getOrdersSuccess} from "../redux/actions";

function* saga() {
    try {
        const result: Promise<any> = yield call(fetchOrders);
        yield put(getOrdersSuccess(result));
    } catch {
        yield put(getOrdersError());
    }
}

const fetchOrders = () => fetch('https://u38027.netangels.ru/api/orders.php').then(r => r.json());

function* sagaWatcher() {
    yield takeEvery(GET_ORDERS_REQUEST, saga);
}

export default function* rootSaga() {
    yield all([
        sagaWatcher()
    ])
}