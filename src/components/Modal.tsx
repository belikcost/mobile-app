import {OrderType} from "../interfaces";
import times from "../images/times.svg";
import {buildDate, buildPriceAndQuantity} from "./Order";

const Modal = ({order, closeModal}: { order: OrderType, closeModal: () => void }) => {
    const date = buildDate(new Date(order.date!));
    return (
        <div className="show-more">
            <header className="show-more__header">
                <h2>
                    Заказ №{order.number}
                    {order.date && (
                        <p className="show-more_date">
                            {date[1]} {date[0]}
                        </p>
                    )}
                </h2>
                <img className="show-more_close" src={times} onClick={() => closeModal()} alt="Иконка"/>
            </header>
            <div>
                <h4>Товар</h4>
                <p>Название наименование товара</p>
                <div className="show-more__goods">
                    {order.goods.map((g, i) => (
                        <div key={i} className="good">
                            <div>
                                <h4>{g.name}</h4>
                                <p>Количество {g.count} шт</p>
                            </div>
                            <p>{(g.price * g.count).toFixed(2)} Р</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="show-more_separator"/>
            <footer className="show-more__footer">
                <p>Скидка по заказу составила {order.sale} %</p>
                <button>Итого: {buildPriceAndQuantity(order.goods, order.sale)[0]}</button>
                <p>Дата выдачи заказа 10 дней с момента оплаты</p>
            </footer>
        </div>
    );
}

export default Modal;