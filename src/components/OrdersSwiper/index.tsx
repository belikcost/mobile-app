import React, { Dispatch, SetStateAction } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Order from "../Orders/Elements/Order";
import { OrderType } from "../../interfaces";

interface IOrdersSwiperProps {
    orders: OrderType[];
    setShowMore: Dispatch<SetStateAction<OrderType| undefined>>;
}

const OrdersSwiper = ({ orders, setShowMore }: IOrdersSwiperProps) => {

    return (
        <Swiper className="orders__body" slidesPerView={1} spaceBetween={30}>
            {orders.map(order => (
                <SwiperSlide className="order_slide" key={order.id}>
                    <Order order={order} setShowMore={setShowMore}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default React.memo(OrdersSwiper);