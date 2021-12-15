import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import Order from "./Elements/Order";
import Modal from "../Modal";

import { InitialStateType, OrderType } from "../../interfaces";
import { getOrdersRequest } from "../../actions";

import filter from '../../images/filter.svg';

const Orders = () => {
    const [showMore, setShowMore] = useState<OrderType>();

    const dispatch = useDispatch();
    const ordersSelector = useSelector((state: InitialStateType) => state.orders);

    useEffect(() => {
        dispatch(getOrdersRequest());
    }, []);

    if (ordersSelector.length === 0) {
        return null;
    }

    return (
        <>
            <div className="orders">
                <header className="orders__header">
                    <h4>Список заказов</h4>
                    <img className="orders_filter" src={filter} alt="Иконка"/>
                </header>
                <Swiper className="orders__body" slidesPerView={1} spaceBetween={30}>
                    {ordersSelector.map(o => (
                        <SwiperSlide key={o.id} onClick={() => setShowMore(o)} className="order_slide">
                            <Order order={o}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {showMore && (
                <Modal order={showMore} closeModal={() => setShowMore(undefined)}/>
            )}
        </>
    );
};

export default Orders;