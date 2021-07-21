import {GoodType, OrderType} from "../interfaces";

export const buildPriceAndQuantity = (goods: GoodType[], sale: number) => {
    let all = 0, quantity = 0;
    goods.forEach(g => {
        quantity += g.count;
        all += g.price * g.count;
    });
    return [(all * (100 - sale) / 100).toFixed(2), quantity];
};

export const buildDate = (d: Date) => d.toLocaleString().replace(/\s/, '').replace(/:\d{2}$/, '').split(',');

const Order = ({order}: { order: OrderType }) => {
    const [price, quantity] = buildPriceAndQuantity(order.goods, order.sale);
    const date = buildDate(new Date(order.date!));

    return (
        <>
            <div className="order">
                <header className="order__header">
                    <h5>Заказ №{order.number}</h5>
                    <p>{price} Р</p>
                </header>
                {order.date &&
                <p className="order_date">{buildDate(new Date())[0] === date[0] ? 'Сегодня:' : date[0]} {date[1]}</p>}
                <div className="order_separator"/>
                <footer className="order__footer">
                    <p>∙ товаров {quantity} шт.</p>
                    <p>∙ наименований {order.goods.length} шт.</p>
                </footer>
            </div>
        </>
    );

}

export default Order;