export interface Product {
    ID: number;
    Name: string;
    Price: number;
    imgUrl: string;
}

export interface IDashCardProps {
    product: Product;
}