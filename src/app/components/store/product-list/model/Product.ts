export interface Product {
    id?: string,
    name: string,
    price: number,
    quantity: number,
    category: string,
    img: string,
    inCart?:boolean,
    qtdAdded?:number
}