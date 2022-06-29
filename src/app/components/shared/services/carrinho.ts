import { Product } from "../../store/product-list/model/Product";

export interface Carrinho {
    id: number | null,
    produtos: Array<Product> | null
}