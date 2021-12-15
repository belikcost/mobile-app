export interface GoodType {
    "id": string,
    "name": string,
    "price": number,
    "count": number

}

export interface OrderType {
    "id": string,
    "number": string,
    "sale": number,
    "date": string,
    "goods": GoodType[]
}

export interface InitialStateType {
    orders: OrderType[],
    error: boolean
}