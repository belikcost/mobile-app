import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import OrdersSwiper from "../OrdersSwiper";
import Modal from "../Modal";

import { InitialStateType, OrderType } from "../../interfaces";
import { getOrdersRequest } from "../../actions";

import filter from '../../images/filter.svg';

const Orders = () => {
    const [showMore, setShowMore] = useState<OrderType>();

    const dispatch = useDispatch();
    const orders = useSelector((state: InitialStateType) => state.orders);

    useEffect(() => {
        dispatch(getOrdersRequest());
    }, []);

    if (orders.length === 0) {
        return null;
    }

    return (
        <>
            <div className="orders">
                <header className="orders__header">
                    <h4>Список заказов</h4>
                    <img className="orders_filter" src={filter} alt="Иконка"/>
                </header>
                <OrdersSwiper orders={orders} setShowMore={setShowMore}/>
            </div>
            {showMore && (
                <Modal order={showMore} closeModal={() => setShowMore(undefined)}/>
            )}
        </>
    );
};

export default Orders;