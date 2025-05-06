export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
    rating: number;
    numberReviews: number;
}

export interface IDashCardProps {
    product: IProduct;
}


export interface IDashButtonProps {
    iconName?: string; // Make these optional to allow defaults
    buttonLabel?: string; // Make these optional to allow defaults
  }

