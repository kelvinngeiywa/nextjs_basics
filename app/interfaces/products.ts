export interface Product{
    id:string;
    name:string;
    category:string;
    price:number;
    imgurl:string;
    description?:string;
    inStock?:boolean;
}

export interface AddToCart{
    productName:string;
    inStock?:boolean;
}