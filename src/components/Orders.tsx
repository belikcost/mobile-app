import {useDispatch, useSelector} from "react-redux";
import filter from '../images/filter.svg';
import {useEffect, useState} from "react";
import {getOrdersRequest} from "../redux/actions";
import {InitialStateType, OrderType} from "../interfaces";
import {Swiper, SwiperSlide} from "swiper/react";
import Order from "./Order";
import Modal from "./Modal";

const Orders = () => {
    const [showMore, setShowMore] = useState<OrderType>();
    const dispatch = useDispatch();
    const ordersSelector = useSelector((s: InitialStateType) => s.orders);

    useEffect(() => {
        dispatch(getOrdersRequest());
    }, [dispatch])

    if (ordersSelector.length !== 0) {
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
                {showMore && <Modal order={showMore} closeModal={() => setShowMore(undefined)}/>}
            </>
        );
    } else {
        return null;
    }
}

export default Orders;