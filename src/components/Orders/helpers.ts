import { GoodType } from "../../interfaces";

const buildPriceAndQuantity = (goods: GoodType[], sale: number) => {
    let all = 0;
    let quantity = 0;

    goods.forEach(g => {
        quantity += g.count;
        all += g.price * g.count;
    });

    return [(all * (100 - sale) / 100).toFixed(2), quantity];
};

const buildDate = (date: Date) => {
    const localizedDate = date.toLocaleString();
    return localizedDate.replace(/\s/, '').replace(/:\d{2}$/, '').split(',');
};

export { buildPriceAndQuantity, buildDate };